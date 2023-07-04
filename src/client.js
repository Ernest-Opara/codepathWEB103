import { createClient } from '@supabase/supabase-js';

const URL = 'https://vfracurbalbxmqhhxidb.supabase.co';

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmcmFjdXJiYWxieG1xaGh4aWRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgzMzIyMDEsImV4cCI6MjAwMzkwODIwMX0.GLPW8IwwTPCKUGWV-E68BJ334a6myRURLtc4q4p-F_k'

export const supabase = createClient(URL, API_KEY);