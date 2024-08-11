const materials = [
    {
      uid: '550e8400-e29b-41d4-a716-446655440000',
      title: 'The Great Gatsby',
      abstraction: 'A novel set in the 1920s',
      author: 'F. Scott Fitzgerald',
      published_date: '1925-04-10',
      last_checkout: '2024-05-01',
      categories: ['Novel', 'Classic'],
      imageUrl: "images\\gatsby.jpg"
    },
    {
      uid: '550e8400-e29b-41d4-a716-446655440001',
      title: 'Quantum Mechanics Paper',
      abstraction: 'Research on quantum entanglement',
      author: 'Albert Einstein',
      published_date: '1935-03-15',
      last_checkout: '2024-04-30',
      categories: ['Research Paper', 'Physics'],
      imageUrl: "images\\quantum_theory.png" 
    },
    {
      uid: '550e8400-e29b-41d4-a716-446655440002',
      title: 'Daily News',
      abstraction: 'Latest updates on global events',
      author: 'Daily News Editorial',
      published_date: '2024-05-20',
      last_checkout: '2024-05-20',
      categories: ['Newspaper'],
      imageUrl: "images\\daily_news.jpg"
    },
    {
      uid: '550e8400-e29b-41d4-a716-446655440003',
      title: 'Science Monthly',
      abstraction: 'Articles on scientific discoveries',
      author: 'Various Authors',
      published_date: '2024-05-01',
      last_checkout: '2024-05-10',
      categories: ['Magazine', 'Science'],
      imageUrl: "images\\science_monthly.jpg"
    },
    {
      uid: '550e8400-e29b-41d4-a716-446655440004',
      title: 'To Kill a Mockingbird',
      abstraction: 'A novel about racial injustice',
      author: 'Harper Lee',
      published_date: '1960-07-11',
      last_checkout: '2024-05-05',
      categories: ['Novel', 'Classic'],
      imageUrl: "images\\to_kill_a_mocking_bird.jpg"
    },
    {
      uid: '550e8400-e29b-41d4-a716-446655440005',
      title: 'Modern Art Magazine',
      abstraction: 'Features on contemporary artists',
      author: 'Various Contributors',
      published_date: '2024-04-01',
      last_checkout: '2024-05-02',
      categories: ['Magazine', 'Art'],
      imageUrl: "images\\modern_art.jpg"
    },
    {
      uid: '550e8400-e29b-41d4-a716-446655440006',
      title: 'Machine Learning Advances',
      abstraction: 'Recent progress in machine learning',
      author: 'Andrew Ng',
      published_date: '2023-11-12',
      last_checkout: '2024-05-04',
      categories: ['Research Paper', 'Computer Science'],
      imageUrl: "images\\advanced_ml.jpg"
    },
    {
      uid: '550e8400-e29b-41d4-a716-446655440007',
      title: 'Historical Review',
      abstraction: 'Analyses of historical events',
      author: 'John Doe',
      published_date: '2024-02-25',
      last_checkout: '2024-04-25',
      categories: ['Magazine', 'History'],
      imageUrl: "images\\history.jpg"
    },
    {
      uid: '550e8400-e29b-41d4-a716-446655440008',
      title: 'Local Gazette',
      abstraction: 'News from the local community',
      author: 'Local Journalists',
      published_date: '2024-05-19',
      last_checkout: '2024-05-19',
      categories: ['Newspaper'],
      imageUrl: "images\\local.jpg"
    },
    {
      uid: '550e8400-e29b-41d4-a716-446655440009',
      title: 'Artificial Intelligence Journal',
      abstraction: 'Latest AI research papers',
      author: 'Various Researchers',
      published_date: '2024-05-15',
      last_checkout: '2024-05-18',
      categories: ['Journal', 'Computer Science'],
      imageUrl: "images\\ai-journal.jpg"
    }
  ];

const categories = [
    'Novel', 
    'Classic', 
    'Research Paper', 
    'Physics', 
    'Newspaper', 
    'Magazine', 
    'Science', 
    'Art', 
    'Computer Science', 
    'History', 
    'Journal'
];

const users = [
    {
      id: '550e8400-e29b-41d4-a716-446655440000',
      name: 'John Doe',
      createdDate: '2024-05-01',
      email: 'john@example.com',
      password: 'password123'
    },
    {
      id: '550e8400-e29b-41d4-a716-446655440001',
      name: 'Jane Smith',
      createdDate: '2024-05-02',
      email: 'jane@example.com',
      password: 'password123'
    },
    {
      id: '550e8400-e29b-41d4-a716-446655440002',
      name: 'Alice Johnson',
      createdDate: '2024-05-03',
      email: 'alice@example.com',
      password: 'password123'
    },
    {
      id: '550e8400-e29b-41d4-a716-446655440003',
      name: 'Bob Brown',
      createdDate: '2024-05-04',
      email: 'bob@example.com',
      password: 'password123'
    },
    {
      id: '550e8400-e29b-41d4-a716-446655440004',
      name: 'Charlie Davis',
      createdDate: '2024-05-05',
      email: 'charlie@example.com',
      password: 'password123'
    },
    {
      id: '550e8400-e29b-41d4-a716-446655440005',
      name: 'David Evans',
      createdDate: '2024-05-06',
      email: 'david@example.com',
      password: 'password123'
    },
    {
      id: '550e8400-e29b-41d4-a716-446655440006',
      name: 'Eva Foster',
      createdDate: '2024-05-07',
      email: 'eva@example.com',
      password: 'password123'
    },
    {
      id: '550e8400-e29b-41d4-a716-446655440007',
      name: 'Frank Green',
      createdDate: '2024-05-08',
      email: 'frank@example.com',
      password: 'password123'
    },
    {
      id: '550e8400-e29b-41d4-a716-446655440008',
      name: 'Grace Harris',
      createdDate: '2024-05-09',
      email: 'grace@example.com',
      password: 'password123'
    },
    {
      id: '550e8400-e29b-41d4-a716-446655440009',
      name: 'Hannah White',
      createdDate: '2024-05-10',
      email: 'hannah@example.com',
      password: 'password123'
    }
  ];


const fines = [
    {
      user_id: '550e8400-e29b-41d4-a716-446655440000',
      material_id: '550e8400-e29b-41d4-a716-446655440000',
      amount: 5.00,
      due_date: '2024-06-01'
    },
    {
      user_id: '550e8400-e29b-41d4-a716-446655440001',
      material_id: '550e8400-e29b-41d4-a716-446655440001',
      amount: 10.00,
      due_date: '2024-06-01'
    },
    {
      user_id: '550e8400-e29b-41d4-a716-446655440002',
      material_id: '550e8400-e29b-41d4-a716-446655440002',
      amount: 2.50,
      due_date: '2024-06-01'
    },
    {
      user_id: '550e8400-e29b-41d4-a716-446655440003',
      material_id: '550e8400-e29b-41d4-a716-446655440003',
      amount: 3.75,
      due_date: '2024-06-01'
    },
    {
      user_id: '550e8400-e29b-41d4-a716-446655440004',
      material_id: '550e8400-e29b-41d4-a716-446655440004',
      amount: 4.25,
      due_date: '2024-06-01'
    },
    {
      user_id: '550e8400-e29b-41d4-a716-446655440005',
      material_id: '550e8400-e29b-41d4-a716-446655440005',
      amount: 6.00,
      due_date: '2024-06-01'
    },
    {
      user_id: '550e8400-e29b-41d4-a716-446655440006',
      material_id: '550e8400-e29b-41d4-a716-446655440006',
      amount: 7.25,
      due_date: '2024-06-01'
    },
    {
      user_id: '550e8400-e29b-41d4-a716-446655440007',
      material_id: '550e8400-e29b-41d4-a716-446655440007',
      amount: 5.50,
      due_date: '2024-06-01'
    },
    {
      user_id: '550e8400-e29b-41d4-a716-446655440008',
      material_id: '550e8400-e29b-41d4-a716-446655440008',
      amount: 8.75,
      due_date: '2024-06-01'
    },
    {
      user_id: '550e8400-e29b-41d4-a716-446655440009',
      material_id: '550e8400-e29b-41d4-a716-446655440009',
      amount: 4.00,
      due_date: '2024-06-01'
    }
  ];