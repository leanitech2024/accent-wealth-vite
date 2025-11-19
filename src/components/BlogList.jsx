import React, { useState } from 'react';
import BlogCard from './BlogCard';
import { useLoaderData } from 'react-router-dom';
import { scrollToTop } from '../utils/helpers';

const BlogList = () => {
  const { blogs: sortedBlogs } = useLoaderData();
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 9;
  const totalPages = Math.ceil(sortedBlogs.length / postsPerPage);

  const currentPosts = sortedBlogs.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const paginate = (page) => {
    setCurrentPage(page);
    scrollToTop();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 lg:p-16">
      <div className="container mx-auto">

        {/* Heading */}
        <header className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Expert Insights.
            <br />
            <span className="text-[#8a7208]"> Smarter Investments.</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Navigate the markets with clarity and confidence. Our expert-curated insights help you protect, grow, and optimise your wealth.
          </p>
        </header>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentPosts.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <nav className="flex justify-center mt-12 gap-2 flex-wrap">
            {/* Prev */}
            <button
              disabled={currentPage === 1}
              onClick={() => paginate(currentPage - 1)}
              className={`px-4 py-2 rounded-lg flex items-center gap-1 text-sm ${
                currentPage === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Prev
            </button>

            {/* Numbers */}
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => paginate(idx + 1)}
                className={`px-4 py-2 rounded-lg text-sm ${
                  currentPage === idx + 1
                    ? 'bg-[#8a7208] text-white'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {idx + 1}
              </button>
            ))}

            {/* Next */}
            <button
              disabled={currentPage === totalPages}
              onClick={() => paginate(currentPage + 1)}
              className={`px-4 py-2 rounded-lg flex items-center gap-1 text-sm ${
                currentPage === totalPages
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              Next
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </nav>
        )}
      </div>
    </div>
  );
};

export default BlogList;
