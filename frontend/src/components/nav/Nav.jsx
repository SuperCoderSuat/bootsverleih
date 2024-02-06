import "./Nav.scss";
import SchiffIcon from "./../../assets/images/Schiff.png";
import KalenderIcon from "./../../assets/images/Kalender.png";
import { useNavigate } from "react-router-dom";

const Nav = () => {

    const navigate = useNavigate()

    const linkZuBoote = () => {
        navigate("/boote")
    }

    const linkZuReservierungen = () => {
        navigate("/reservierungen")
    }

    return (
        <nav>
            <img onClick={() => linkZuBoote()} src={SchiffIcon} alt="" />
            <img onClick={() => linkZuReservierungen()} src={KalenderIcon} alt="" />
        </nav>
    );
}
 
export default Nav;