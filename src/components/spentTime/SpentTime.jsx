 
import PropTypes from 'prop-types'; // ES6
const SpentTime = ({time}) => {
    return (
        <div className=' w-[400px]  pt-16 text-xl font-bold ml-6 mb-4 mt-10  '>
            <h1 className="text-center  pb-4 border-2 border-purple-500 rounded-xl pt-4 bg-purple-100 text-blue-600">Spent time on read: {time} min</h1>
        </div>
    );
};

SpentTime.propTypes={
    time:PropTypes.number
}
export default SpentTime;