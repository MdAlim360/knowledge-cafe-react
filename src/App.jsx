import { useState } from 'react';
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmark from './components/bookmark/Bookmark'
import Header from './components/header/Header'
import SpentTime from './components/spentTime/SpentTime';

function App() {
  const[bookmarks, setBookMarks]=useState([]); 
  const [readTime, setReadTimes]=useState(0);

  const handleBookMarks = blog =>{
    console.log(blog)
    const newBookMarks = [...bookmarks, blog]
    setBookMarks(newBookMarks);
  }

  const handleTime = time =>{
    console.log(time); 
    const newTime = readTime+time;
    setReadTimes(newTime);
  }
  

  return (
    <div className='max-w-5xl mx-auto'>
       <Header></Header>
       <div className='md:flex'>
       <Blogs handleBookMarks={handleBookMarks} handleTime={handleTime}></Blogs>
       <div className=''>
       <SpentTime time={readTime}></SpentTime>
       <Bookmark bookmarks={bookmarks}></Bookmark>
       </div>
       </div>
    </div>
  )
}

export default App
