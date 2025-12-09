import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL and/or anon key are missing in .env file');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const seedUser = async () => {
  console.log('Seeding admin user...');
  const { data, error } = await supabase.auth.signUp({
    email: 'admin@nmrc.com',
    password: 'admin123',
  });

  if (error) {
    if (error.message.includes('User already registered')) {
      console.log('Admin user already exists.');
    } else {
      console.error('Error creating admin user:', error.message);
    }
  } else if (data.user) {
    // Manually confirm the user's email
    await supabase.auth.admin.updateUserById(data.user.id, {
      email_confirm: true,
    });
    console.log('Admin user created and confirmed successfully!');
  } else {
    console.log('No user data returned, but no error was thrown.');
  }
};

seedUser(); 