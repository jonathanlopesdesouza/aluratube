import {createClient} from "@supabase/supabase-js";
const PROJECT_URL = "https://zripqjqhpoqxxafzgpqv.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpyaXBxanFocG9xeHhhZnpncHF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNzIyMjMsImV4cCI6MTk4Mzc0ODIyM30.2cz5kQbKpKe5e3z6oMpzbDbJePcr2lI0FoJ2n6aOBKs";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService(){
    return {
        getAllVideos (){
        return supabase.from("video")
        .select("*")
    }  
  }
}