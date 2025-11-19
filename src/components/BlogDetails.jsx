import { useLoaderData, Link } from 'react-router-dom';
import ContentRenderer from './ContentRenderer';
import { scrollToTop } from '../utils/helpers';

const BlogDetails = () => {
  const { blog } = useLoaderData();

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog Not Found</h1>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#8a7208] hover:bg-[#6b5a06] text-white px-6 py-3 rounded-full transition"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative h-64 sm:h-80 lg:h-96 bg-gradient-to-r from-[#8a7208] to-[#6b5a06] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative text-center text-white px-4 max-w-3xl">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            {blog.title}
          </h1>

          <div className="flex flex-wrap justify-center items-center gap-3 text-sm sm:text-base">
            <span>{blog.date}</span>
            <span>•</span>
            <div className="flex flex-wrap gap-2">
              {blog.categories.map((cat, i) => (
                <span key={i} className="bg-white/20 px-3 py-1 rounded-full">
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <main className="container mx-auto px-4 py-10">
        <article className="relative max-w-4xl mx-auto rounded-lg shadow-lg overflow-hidden">

          {/* Paper Background Texture */}
          <div
            className="absolute inset-0 bg-[url('/paper-texture.png')] bg-cover bg-center opacity-20 pointer-events-none"
          ></div>

          {/* MAIN CONTENT */}
          <div className="relative p-6 sm:p-10 backdrop-blur-sm">

            {/* Blog Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 sm:h-80 md:h-96 object-contain bg-gray-100 mb-6 rounded"
            />

            {/* Render Dynamic Content */}
            <ContentRenderer content={blog.content} />

            {/* Disclaimer Box */}
            <div className="mt-12 p-6 bg-amber-50 border-l-4 border-[#8a7208] rounded-r-lg">
              <p className="text-sm text-gray-700">
                <strong className="text-[#8a7208]">Disclaimer:</strong>
                &nbsp;This blog is for informational purposes only and is not
                financial advice. Consult a certified financial professional before
                making any investment decisions.
              </p>
            </div>

            {/* Back Button */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <Link
                to="/"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 bg-[#8a7208] hover:bg-[#6b5a06] text-white px-6 py-3 rounded-full transition"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to All Blogs
              </Link>
            </div>

          </div>
        </article>
      </main>
    </div>
  );
};

export default BlogDetails;
