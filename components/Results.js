import Thumbnail from "./Thumbnail";
import FlipMove from 'react-flip-move';

const Results = ({reqResults}) => {
    const {results} = reqResults;
    
    return (
        <FlipMove duration={750} easing="ease-out" className=" px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap  justify-evenly">
            {results.map(result  => {
                return <Thumbnail key={result.id} result={result} />
            })}
        </FlipMove >
    )
}

export default Results
