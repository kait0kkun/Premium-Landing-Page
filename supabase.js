import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://yfalcutbnaczdqkznnaq.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlmYWxjdXRibmFjemRxa3pubmFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTczNzk2NjIsImV4cCI6MjA3Mjk1NTY2Mn0.6ErYeeB7cvO9lKXYcIu998f_9cVjeXrLWdY_r6bnqew'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export async function saveContact(Name, Email) {
  const { data, error } = await supabase
    .from('contacts')
    .insert([{ Name, Email }]);

  if (error) {
    console.error('Supabase insert error:', error);
    return false;
  }

  console.log('Saved contact:', data);
  return true;
}