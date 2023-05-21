import { Link } from "react-router-dom"

const ArtistsList = ({ list, keyword }) => (
    list.map(({ artistid, image, name }) => (
        <Link key={artistid} to={`/artist/${artistid}`} state={{ keyword }} className="d-flex align-items-center mb-3">
            <div 
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    width: 50,
                    height: 50,
                    borderRadius: 50
                }}
            />
            <div className="w-75 px-3">
                <h4 className="h6">{name}</h4>
            </div>
        </Link>
    ))
)

export default ArtistsList