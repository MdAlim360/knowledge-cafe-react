import DisplayBookMark from "../displayBookmark/DisplayBookMark";
import PropTypes from 'prop-types'; // ES6

const Bookmark = ({bookmarks}) => {
    return (
        <div className=' pb-6 rounded-lg pt-6 bg-slate-100 ml-6 '>
            <h1 className=' w1/3 text-xl font-bold text-center'>Bookmarked Blogs:{bookmarks.length}</h1>
             {
             bookmarks.map((bookmark,idx)=><DisplayBookMark key={idx} bookmark={bookmark}></DisplayBookMark>)
             }
        </div>
    );
};

Bookmark.propTypes={
    bookmarks:PropTypes.array
}
export default Bookmark;