import PropTypes from 'prop-types'; // ES6

const DisplayBookMark = ({bookmark}) => {
    const{title}=bookmark
    return (
        <div className="px-5 pt-4">
            <p className="pl-5 bg-white mb-2  p-4 rounded-xl">{title}</p>
        </div>
    );
};

DisplayBookMark.propTypes={
    bookmark:PropTypes.object
}
export default DisplayBookMark;