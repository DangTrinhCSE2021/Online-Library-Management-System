import { sql } from '@vercel/postgres';
import { User, Material, Category, Fine } from './definition';

export async function fetchUsers(): Promise<User[]> {
  try {
    const data = await sql<User>`SELECT * FROM users`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch users.');
  }
}

export async function fetchMaterials(): Promise<Material[]> {
  try {
    const data = await sql<Material>`SELECT * FROM materials`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch materials.');
  }
}

export async function fetchCategories(): Promise<Category[]> {
  try {
    const data = await sql<Category>`SELECT * FROM categories`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch categories.');
  }
}

export async function fetchFines(): Promise<Fine[]> {
  try {
    const data = await sql<Fine>`SELECT * FROM fines`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch fines.');
  }
}

export async function fetchUserById(userId: string): Promise<User | null> {
  try {
    const data = await sql<User>`SELECT * FROM users WHERE id = ${userId}`;
    return data.rows[0] || null;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch user.');
  }
}

export async function fetchMaterialById(materialId: string): Promise<Material | null> {
  try {
    const data = await sql<Material>`SELECT * FROM materials WHERE uid = ${materialId}`;
    return data.rows[0] || null;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch material.');
  }
}

export async function fetchFineById(fineId: string): Promise<Fine | null> {
  try {
    const data = await sql<Fine>`SELECT * FROM fines WHERE id = ${fineId}`;
    return data.rows[0] || null;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch fine.');
  }
}

export async function fetchCategoryById(categoryId: string): Promise<Category | null> {
  try {
    const data = await sql<Category>`SELECT * FROM categories WHERE id = ${categoryId}`;
    return data.rows[0] || null;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch category.');
  }
}
