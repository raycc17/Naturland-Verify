import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bodudwldyumddshyamsj.supabase.co";

const supabaseKey =
  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvZHVkd2xkeXVtZGRzaHlhbXNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMxMTM2MTMsImV4cCI6MjA5ODY4OTYxM30.G9Cer6HWevpAKj_pCrhTQitsqaUfUKDY1n4Vu2ehZ2Q;

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
