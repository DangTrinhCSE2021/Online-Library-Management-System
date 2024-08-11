const { db } = require('@vercel/postgres');
const {
    materials,
    categories,
    users,
    fines,
} = require('placeholder.js')
const bcrypt = require('bcrypt');

async function seedMaterials(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

        await client.sql`
            CREATE TABLE IF NOT EXISTS materials (
                uid UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                abstraction VARCHAR(255) NOT NULL,
                author VARCHAR(255) NOT NULL,
                published_date DATE NOT NULL,
                last_checkout DATE NOT NULL DEFAULT CURRENT_DATE
            );
        `;

        await client.sql`
            CREATE TABLE IF NOT EXISTS categories (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                name VARCHAR(255) NOT NULL UNIQUE
            );
        `;

        await client.sql`
            CREATE TABLE IF NOT EXISTS material_categories (
                material_id UUID REFERENCES materials(uid),
                category_id UUID REFERENCES categories(id),
                PRIMARY KEY (material_id, category_id)
            );
        `;

        console.log('Create "materials", "categories", and "material_categories" tables');

        const categoryIds = {};
        const insertedCategories = await Promise.all(
            categories.map(async (category) => {
                const result = await client.sql`
                    INSERT INTO categories (name)
                    VALUES (${category})
                    ON CONFLICT (name) DO NOTHING
                    RETURNING id;
                `;
                categoryIds[category] = result[0]?.id;
            })
        );

        const insertedMaterials = await Promise.all(
            materials.map(async (material) => {
                await client.sql`
                    INSERT INTO materials (uid, title, abstraction, author, published_date, last_checkout)
                    VALUES (${material.uid}, ${material.title}, ${material.abstraction}, ${material.author}, ${material.published_date}, ${material.last_checkout})
                    ON CONFLICT (uid) DO NOTHING;
                `;

                await Promise.all(
                    material.categories.map(async (category) => {
                        const categoryId = categoryIds[category];
                        await client.sql`
                            INSERT INTO material_categories (material_id, category_id)
                            VALUES (${material.uid}, ${categoryId})
                            ON CONFLICT (material_id, category_id) DO NOTHING;
                        `;
                    })
                );
            })
        );

        console.log(`Seeded ${insertedMaterials.length} materials and their categories`);

        return {
            materials: insertedMaterials.length,
            categories: insertedCategories.length,
        };


    } catch (error) {
        console.log('Error seeding materials:', error);
        throw error;
    }
}

async function seedUsers(client) {
    try {
      await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
      // Create the "users" table if it doesn't exist
      const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS users (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          createdDate DATE NOT NULL,
          email TEXT NOT NULL UNIQUE,
          password TEXT NOT NULL
        );
      `;
  
      console.log(`Created "users" table`);
  
      // Insert data into the "users" table
      const insertedUsers = await Promise.all(
        users.map(async (user) => {
          const hashedPassword = await bcrypt.hash(user.password, 10);
          return client.sql`
          INSERT INTO users (id, name, createdDate, email, password)
          VALUES (${user.id}, ${user.name}, ${user.createdDate}, ${user.email}, ${hashedPassword})
          ON CONFLICT (id) DO NOTHING;
        `;
        }),
      );
  
      console.log(`Seeded ${insertedUsers.length} users`);
  
      return {
        createTable,
        users: insertedUsers,
      };
    } catch (error) {
      console.error('Error seeding users:', error);
      throw error;
    }
}


async function seedFines(client) {
    try {
        const createFinesTable = await client.sql`
            CREATE TABLE IF NOT EXISTS fines (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                user_id UUID REFERENCES users(id),
                material_id UUID REFERENCES materials(uid),
                amount DECIMAL(10, 2) NOT NULL,
                due_date DATE NOT NULL
            );
        `;

        console.log('Created "fines" table');

        const insertedFines = await Promise.all(
            fines.map(async (fine) => {
                return client.sql`
                    INSERT INTO fines (id, user_id, material_id, amount, due_date)
                    VALUES (uuid_generate_v4(), ${fine.user_id}, ${fine.material_id}, ${fine.amount}, ${fine.due_date})
                    ON CONFLICT (id) DO NOTHING;
                `;
            })
        );

        console.log(`Seeded ${insertedFines.length} fines`);

        return {
            createFinesTable,
            fines: insertedFines,
        };
    } catch (error) {
        console.log('Error seeding fines:', error);
        throw error;
    }
}