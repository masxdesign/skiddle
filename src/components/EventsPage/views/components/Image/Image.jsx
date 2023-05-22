import { useTileContext } from "@/EventsPage/components/TileProvider/TileProvider"

const Image = () => {
    const data = useTileContext()

    return data ? (
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
    )
}

export default Image