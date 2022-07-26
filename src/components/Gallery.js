import { useParams, Link } from "react-router"

const GalleryButton = () =>{
    const {id} = useParams()
    return(
        <Link to={`/schedule/${id}/game_${id}/post/`}><button id='chat-button' className="btn btn-lg btn-primary">Photo Gallery</button></Link>
    )
}

export { GalleryButton }