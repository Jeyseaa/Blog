// pages/blogs.tsx
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useRouter } from 'next/router';
import { createBlog, updateBlog, deleteBlog, fetchBlogs } from '../lib/blogApi';

export default function BlogsPage() {
  const user = useSelector((state: RootState) => state.auth.user);
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const pageSize = 5;

  useEffect(() => {
    loadBlogs();
  }, [page]);

  const loadBlogs = async () => {
    setLoading(true);
    try {
      const { blogs, total } = await fetchBlogs(page, pageSize);
      setBlogs(blogs);
      setTotal(total);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (!title || !content) {
      setError('Title and content are required');
      return;
    }
    if (!user) {
      setError('You must be logged in to create a blog');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await createBlog(title, content, user.id);
      alert('Blog created successfully');
      setTitle('');
      setContent('');
      setShowForm(false);
      loadBlogs();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure you want to delete this blog?')) {
      try {
        await deleteBlog(id);
        alert('Blog deleted');
        loadBlogs();
      } catch (err) {
        alert((err as Error).message);
      }
    }
  };

  const totalPages = Math.ceil(total / pageSize);

  return (
    <div className="max-w-7xl mx-auto mt-10 p-6 bg-white shadow-md border rounded-md">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Blog Management</h1>
        <button
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancel' : 'Create Blog'}
        </button>
      </div>

      {showForm && (
        <div className="space-y-4 mb-8 border p-4 rounded-md bg-gray-50">
          {error && <p className="text-red-600 text-center font-medium">{error}</p>}
          <div>
            <label className="block font-medium mb-1">Title</label>
            <input
              type="text"
              placeholder="Enter blog title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={loading}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Content</label>
            <textarea
              placeholder="Write blog content..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              disabled={loading}
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="text-right">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 font-semibold"
            >
              {loading ? 'Creating...' : 'Submit Blog'}
            </button>
          </div>
        </div>
      )}

      <h2 className="text-2xl font-semibold mb-4">All Blogs</h2>

      {blogs.length === 0 ? (
        <p className="text-gray-500">No blogs found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full table-auto border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2 text-left">ID</th>
                <th className="border px-4 py-2 text-left">Title</th>
                <th className="border px-4 py-2 text-left">Content</th>
                <th className="border px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog: any) => (
                <tr key={blog.id} className="hover:bg-gray-50">
                  <td className="border px-4 py-3">{blog.id}</td>
                  <td className="border px-4 py-3">{blog.title}</td>
                  <td className="border px-4 py-3">
                    {blog.content.length > 100 ? blog.content.slice(0, 100) + '...' : blog.content}
                  </td>
                  <td className="border px-4 py-3 space-x-2">
                    <button
                      className="text-blue-600 hover:underline"
                      onClick={() =>
                        router.push(
                          `/update-blog?id=${blog.id}&title=${encodeURIComponent(
                            blog.title
                          )}&content=${encodeURIComponent(blog.content)}`
                        )
                      }
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-600 hover:underline"
                      onClick={() => handleDelete(blog.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={() => setPage(Math.max(1, page - 1))}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded disabled:opacity-50"
          >
            Prev
          </button>
          <span className="text-gray-700">Page {page} of {totalPages}</span>
          <button
            onClick={() => setPage(page + 1)}
            disabled={page >= totalPages}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
