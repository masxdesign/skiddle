import { CalendarDaysIcon, MapPinIcon } from "@heroicons/react/20/solid"
import { Button, Placeholder, PlaceholderButton } from "react-bootstrap"

const GridItem = ({ data }) => (
    <div className="shadow-sm border rounded overflow-hidden">
        {data ? (
            <div style={{
                backgroundImage: `url(${data.largeimageurl})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: "100%",
                paddingTop: "80%"
            }} />
        ) : (
            <div 
                style={{
                    backgroundColor: "gainsboro",
                    width: "100%",
                    paddingTop: "80%"
                }}
            />
        )}
        <div className="d-flex flex-column p-3" style={{ height: 240 }}>
            <h2 className="h5 mb-2">
                {data?.eventname ?? (
                    <Placeholder as="span" animation="glow">
                        <Placeholder xs={12} />
                    </Placeholder>
                )}
            </h2>
            <div className="small text-muted mb-auto">
                <div className="mb-1">
                    <CalendarDaysIcon height={12} />&nbsp;
                    {data?.startdate ?? (
                        <Placeholder as="span" animation="glow">
                            <Placeholder xs={6} />
                        </Placeholder>
                    )}
                </div>
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
            </div>
            {data ? (
                <Button variant="outline-primary">View Event</Button>
            ) : (
                <PlaceholderButton variant="outline-primary" animation="glow">
                    View Event
                </PlaceholderButton>
            )}
        </div>
    </div>
)

export default GridItem