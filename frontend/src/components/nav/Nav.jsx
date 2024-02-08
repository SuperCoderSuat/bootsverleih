import "./Nav.scss";
import SchiffIcon from "./../../assets/images/Schiff.png";
import KalenderIcon from "./../../assets/images/Kalender.png";
import HomeIcon from "./../../assets/images/zuhause.png";
import { useNavigate } from "react-router-dom";

const Nav = () => {

    const navigate = useNavigate()

    const linkZuBoote = () => {
        navigate("/boote")
    }

    const linkZuReservierungen = () => {
        navigate("/reservierungen")
    }
    
    const linkZuHome = () => {
        navigate("/")
    }

    return (
        <nav className="navBar">
            <img className="icon" onClick={() => linkZuHome()} src={HomeIcon} alt="" />
            <img className="icon" onClick={() => linkZuBoote()} src={SchiffIcon} alt="" />
            <img className="icon" onClick={() => linkZuReservierungen()} src={KalenderIcon} alt="" />
        </nav>
    );
}
 
export default Nav;