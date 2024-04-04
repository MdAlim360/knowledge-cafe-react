import PropTypes from 'prop-types'; // ES6
import { CiBookmark } from "react-icons/ci";
const Blog = ({blog, handleBookMarks, handleTime}) => {
    const {id,title, cover_img, author, author_img, posted_date, reading_time, hashtag} = blog
    return (
        <div className='mb-20'>
            <img className='w-full pb-3 pt-3' src={cover_img} alt="" /> 
           <div className='flex justify-between items-center'>
           <div className='flex'>
                <div>
                    <img className=" w-12 rounded-full mr-4   " src={author_img} alt="" />
                </div> 
                <div>
                    <h1 className='text-lg font-semibold '>{author}</h1>
                    <p className='text-sm text-slate-600 '>{posted_date}</p>
                </div>
            </div>
            <div className='flex'>
            <p>{reading_time} min read</p>
            <button onClick={()=>handleBookMarks(blog)} className='pl-2 text-red-600 text-2xl font-extrabold'><CiBookmark></CiBookmark> </button>
            </div>
           </div>

           <p className='text-2xl font-bold'>{title}</p>
           <p>{hashtag}</p>
           <a onClick={()=>handleTime(reading_time,id)} className='text-purple-500 underline' href="#">Mark as read</a>
        </div>
    );
};

Blog.propTypes = {
    blog:PropTypes.object.isRequired,
    handleBookMarks:PropTypes.func,
    handleTime:PropTypes.func
}

export default Blog;