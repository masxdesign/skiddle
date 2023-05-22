import { useTileContext } from "@/EventsPage/components/TileProvider/TileProvider"
import { MapPinIcon } from "@heroicons/react/20/solid"
import { Placeholder } from "react-bootstrap"

const Venue = () => {
    const data = useTileContext()

    return (
        <div>
            <MapPinIcon height={12} />&nbsp;
            {data?.venue ? (
                <>
                    {data.venue.name}, {data.venue.town}
                </>
            ) : (
                <Placeholder as="span" animation="glow">
                    <Placeholder xs={8} />
                </Placeholder>
            )} 
        </div>
    )
}

export default Venue