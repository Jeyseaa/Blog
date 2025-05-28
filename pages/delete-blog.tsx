import { deleteBlog } from '../lib/blogApi';

const handleDelete = async (id: number) => {
  if (confirm('Are you sure you want to delete this blog?')) {
    try {
      await deleteBlog(id);
      alert('Blog deleted');
      // Optionally refresh blog list here
    } catch (err) {
      alert((err as Error).message);
    }
  }
};
