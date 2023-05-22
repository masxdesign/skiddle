import Image from "./components/Image/Image"
import Title from "./components/Title/Title"
import StartDate from "./components/StartDate/StartDate"
import Venue from "./components/Venue/Venue"
import ViewEventButton from "./components/ViewEventButton/ViewEventButton"

const GridItem = () => (
    <div className="shadow-sm border rounded overflow-hidden">
        <Image />
        <div className="d-flex flex-column p-3" style={{ height: 240 }}>
            <Title />
            <div className="small text-muted mb-auto">
                <StartDate className="mb-1" />
                <Venue />
            </div>
            <ViewEventButton />
        </div>
    </div>
)

export default GridItem