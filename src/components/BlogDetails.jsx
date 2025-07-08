import { useLoaderData, Link } from 'react-router-dom'; 
import ContentRenderer from './ContentRenderer';
import { scrollToTop } from '../utils/helpers';

const BlogDetails = () => {


  const { blog } = useLoaderData();

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Blog Not Found
          </h1>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#8a7208] hover:bg-[#6b5a06] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium transition-colors duration-300 text-sm sm:text-base"
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
      <div className="relative h-64 sm:h-80 lg:h-96 bg-gradient-to-r from-[#8a7208] to-[#6b5a06] flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 max-w-4xl leading-tight">
            {blog.title}
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm sm:text-base lg:text-lg">
            <span>{blog.date}</span>
            <span className="hidden sm:inline">•</span>
            <div className="flex flex-wrap gap-2 justify-center">
              {blog.categories.map((category, index) => (
                <span
                  key={index}
                  className="bg-[#8a7208] bg-opacity-20 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-contain"
            />

            <div className="p-4 sm:p-6 lg:p-8 xl:p-12">
              <ContentRenderer content={blog.content} />

              {/* Static Disclaimer */}
              <div className="mt-12 p-6 bg-amber-50 border-l-4 border-[#8a7208] rounded-r-lg">
                <p className="text-sm text-gray-700 font-medium">
                  <strong className="text-[#8a7208]">Disclaimer:</strong>  This blog post is meant for informational purposes only and should not be taken as financial advice. Always consult with certified financial distributors before making any investment decisions. Mutual fund investments are subject to market risks, read all scheme-related documents carefully.
                </p>
              </div>

              <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
                <Link
                  to="/"
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-2 bg-[#8a7208] hover:bg-[#6b5a06] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium transition-colors duration-300 text-sm sm:text-base"
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
                  Back to All Blogs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;