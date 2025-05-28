import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { updateBlog } from '../lib/blogApi';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export default function UpdateBlog() {
  const router = useRouter();
  const { id, title: queryTitle, content: queryContent } = router.query;
  const user = useSelector((state: RootState) => state.auth.user);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (queryTitle) setTitle(queryTitle as string);
    if (queryContent) setContent(queryContent as string);
  }, [queryTitle, queryContent]);

  const handleUpdate = async () => {
    if (!title || !content) {
      setError('Title and content are required');
      return;
    }
    if (!user) {
      setError('You must be logged in to update a blog');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await updateBlog(Number(id), title, content);
      alert('Blog updated successfully');
      router.push('/blogs');
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-2xl rounded-2xl border border-gray-200">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Update Blog</h1>

      {error && <p className="text-red-600 mb-4 text-center font-medium">{error}</p>}

      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={loading}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-1">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            disabled={loading}
            rows={10}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="text-center">
          <button
            onClick={handleUpdate}
            disabled={loading}
            className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold shadow-md transition duration-200"
          >
            {loading ? 'Updating...' : 'Update Blog'}
          </button>
        </div>
      </div>
    </div>
  );
}
