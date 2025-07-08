import { Link, useNavigate } from 'react-router-dom';
import { scrollToTop } from '../utils/helpers';
const BlogCard = ({ blog }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    scrollToTop()

    setTimeout(() => {
      navigate(`/blog/${blog.slug}`);
    }, 100);
  };
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-48 object-cover"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <span>{blog.date}</span>
          <span>•</span>
          <div className="flex gap-2">
            {blog.categories.slice(0, 2).map((category, index) => (
              <span key={index} className="text-[#8a7208]">
                {category}
              </span>
            ))}
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-[#8a7208] transition-colors">
          {blog.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>

        <Link
          onClick={handleReadMore}
          className="inline-flex items-center gap-2 bg-[#8a7208] hover:bg-[#6b5a06] text-white px-6 py-2 rounded-full font-medium transition-colors duration-300"
        >
          Read More
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
