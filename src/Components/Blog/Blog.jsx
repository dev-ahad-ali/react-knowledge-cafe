import PropTypes from 'prop-types';
import { IoBookmarksOutline } from 'react-icons/io5';
const Blog = ({ blog, handleAddToBookmark }) => {
  const {
    title,
    cover,
    reading_time,
    author,
    author_img,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="mb-5">
      <img src={cover} alt={`Cover picture of the ${title} blog `} />
      <div className="flex justify-between items-center mt-5">
        <div className="flex gap-4">
          <img src={author_img} alt="" />
          <div>
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center">
          <span>{reading_time} min read</span>
          <button
            className="text-red-400 ml-1 text-xl"
            onClick={() => handleAddToBookmark(blog)}
          >
            <IoBookmarksOutline></IoBookmarksOutline>
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p className="flex gap-4">
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="#">{hash}</a>
          </span>
        ))}
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
};

export default Blog;
