import Image from "next/image"
import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef } from "react"


// eslint-disable-next-line react/display-name
const Thumbnail = forwardRef(({ result }, ref) => {
    const BASE_URL = "https://image.tmdb.org/t/p/original";
    const { poster_path, overview, backdrop_path, original_title, original_name, vote_count, media_type, release_date } = result
    return (
        <div ref={ref} className="group p-2 cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
            <Image layout="responsive" src={(BASE_URL + (poster_path || backdrop_path)) || BASE_URL + poster_path} height={1080} width={1920} alt="thumbnail" />
            <div>
                <p className="truncate max-w-md">{overview}</p>
                <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">{original_title || original_name}</h2>
                <p className="group-hover:opacity-100 opacity-0 flex items-center">
                    {media_type} {" "}
                    {release_date} {" "}
                    <ThumbUpIcon className="h-5 mx-2" /> {vote_count}
                </p>
            </div>
        </div>
    )
})



export default Thumbnail
