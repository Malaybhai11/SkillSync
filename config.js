fetch('env.json')
  .then(res => res.json())
  .then(env => {
    const supabase = supabase.createClient(env.SUPABASE_URL, env.SUPABASE_KEY);
    // Now use supabase
  });
