import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";
import PropTypes from 'prop-types'; // ES6

const Blogs = ({handleBookMarks, handleTime}) => {
    const [blogs, setBlogs]=useState([]);
    useEffect(()=>{
        fetch('/Blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className=' md:w-2/3 pt-10'>
            <h1 className=' w-2/3 text-xl font-bold pt-6'>Blogs:{blogs.length}</h1> 
            {blogs.map(blog=><Blog key={blog.id} blog={blog} handleBookMarks={handleBookMarks} handleTime={handleTime}></Blog>)}
        </div>
    );
};

Blogs.propTypes={
    handleBookMarks:PropTypes.func,
    handleTime:PropTypes.func

}
export default Blogs;