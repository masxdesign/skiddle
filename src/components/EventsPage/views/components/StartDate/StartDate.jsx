import { useTileContext } from "@/EventsPage/components/TileProvider/TileProvider"
import { CalendarDaysIcon } from "@heroicons/react/20/solid"
import { Placeholder } from "react-bootstrap"

const StartDate = ({ className }) => {
    const data = useTileContext()

    return (
        <div className={className}>
            <CalendarDaysIcon height={12} />&nbsp;
            {data?.startdate ?? (
                <Placeholder as="span" animation="glow">
                    <Placeholder xs={6} />
                </Placeholder>
            )}
        </div>
    )
}

export default StartDate