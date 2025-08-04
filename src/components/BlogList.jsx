import React, { useState } from 'react';
import BlogCard from './BlogCard';
import { useLoaderData } from 'react-router-dom';
import { scrollToTop } from '../utils/helpers';

const BlogList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const { blogs: sortedBlogs } = useLoaderData();

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedBlogs.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(sortedBlogs.length / postsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    scrollToTop();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 lg:p-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Expert Insights.
            <br className="md:hidden" />
            <span className="text-[#8a7208]"> Smarter Investments.</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Navigate the markets with clarity and confidence. Our expert-curated
            insights, strategic tips, and deep dives decode complex financial
            trends into actionable guidance — helping you protect, grow, and
            optimise your&nbsp;wealth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {currentPosts.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-8 sm:mt-12 px-4">
            <div className="flex flex-wrap justify-center items-center gap-2">
              {/* Previous Button */}
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-medium transition-colors duration-200 text-sm sm:text-base flex items-center gap-1
                  ${
                    currentPage === 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer'
                  }`}
              >
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
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
                <span className="hidden sm:inline">Prev</span>
              </button>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-medium transition-colors cursor-pointer duration-200 text-sm sm:text-base
                    ${
                      currentPage === i + 1
                        ? 'bg-[#8a7208] text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                >
                  {i + 1}
                </button>
              ))}

              {/* Next Button */}
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-medium transition-colors duration-200 text-sm sm:text-base flex items-center gap-1
                  ${
                    currentPage === totalPages
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer'
                  }`}
              >
                <span className="hidden sm:inline">Next</span>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;
