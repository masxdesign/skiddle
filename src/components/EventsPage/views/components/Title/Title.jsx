import { useTileContext } from "@/EventsPage/components/TileProvider/TileProvider"
import { Placeholder } from "react-bootstrap"

const Title = () => {
    const data = useTileContext()

    return (
        <h2 className="h5 mb-2 text-dark">
            {data?.eventname ?? (
                <Placeholder as="span" animation="glow">
                    <Placeholder xs={12} />
                </Placeholder>
            )}
        </h2>
    )
}

export default Title