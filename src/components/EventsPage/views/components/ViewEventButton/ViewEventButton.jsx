import { useTileContext } from "@/EventsPage/components/TileProvider/TileProvider"
import { Button, PlaceholderButton } from "react-bootstrap"

const ViewEventButton = () => {
    const data = useTileContext()

    return data ? (
        <Button variant="outline-primary">View Event</Button>
    ) : (
        <PlaceholderButton variant="outline-primary" animation="glow">
            View Event
        </PlaceholderButton>
    )
}

export default ViewEventButton