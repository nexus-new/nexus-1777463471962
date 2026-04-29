import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://scxqlelthseenzerezmq.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjeHFsZWx0aHNlZW56ZXJlem1xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU0NzM0NjQsImV4cCI6MjA5MTA0OTQ2NH0.EPvKsxb8LoLAcUoaOppqPVnjEOv7XoYWndt7GgThcKk';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export function useClient() {
  return supabase;
}