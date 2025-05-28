import { supabase } from './supabase';
import type { Blog } from '../store/slices/blogSlice';

export async function fetchBlogs(page: number, pageSize: number) {
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  const { data, error, count } = await supabase
    .from('blogs')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(from, to);

  if (error) throw error;
  return { blogs: (data as Blog[]) || [], total: count || 0 };
}

export async function createBlog(title: string, content: string, user_id: string) {
  const { data, error } = await supabase
    .from('blogs')
    .insert([{ title, content, user_id }])
    .select();

  if (error) throw error;
  return (data as Blog[])[0];
}

export async function updateBlog(id: number, title: string, content: string) {
  const { data, error } = await supabase
    .from('blogs')
    .update({ title, content })
    .eq('id', id)
    .select();

  if (error) throw error;
  return (data as Blog[])[0];
}

export async function deleteBlog(id: number) {
  const { error } = await supabase
    .from('blogs')
    .delete()
    .eq('id', id);

  if (error) throw error;
}
