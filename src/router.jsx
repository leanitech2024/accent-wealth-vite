import { createBrowserRouter } from 'react-router-dom';
import AppLayout from './App';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetails';
import fetchBlogPostData from './data';
import Loader from './components/Loader';

// Load blog list
const blogListLoader = async () => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  const data = await fetchBlogPostData();

  // Sort by createdAt (OLDER slug/timestamp)
  const sortedBlogs = [...data].sort((a, b) => {
    const timestampA = parseInt(a.createdAt);
    const timestampB = parseInt(b.createdAt);
    return timestampB - timestampA;
  });

  return { blogs: sortedBlogs };
};


const blogDetailLoader = async ({ params }) => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  const data = await fetchBlogPostData();


  const blog = data.find((b) => b.slug === params.slug);

  if (!blog) {
    throw new Response('Blog Post Not Found', { status: 404 });
  }
  return { blog };
};

// Router
const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    HydrateFallback: () => <Loader />,
    children: [
      {
        index: true,
        element: <BlogList />,
        loader: blogListLoader,
      },
      {
        path: 'blog/:slug',
        element: <BlogDetail />,
        loader: blogDetailLoader,
      },
    ],
  },
]);

export default router;
