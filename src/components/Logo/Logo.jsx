import stacked from "../../assets/skiddle-logo-stacked.png"
import landscape from "../../assets/skiddle-logo-landscape.png"

const variants = {
    stacked,
    landscape
}

const Logo = ({ variant = "stacked", ...props }) => (
    <img src={variants[variant]} {...props} />
)

export default Logo