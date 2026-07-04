import { supabase } from "./supabase";

export async function getProducts() {

  const { data, error } = await supabase
    .from("nv_products")
    .select("*")
    .order("id");

  if (error) throw error;

  return data;

}
