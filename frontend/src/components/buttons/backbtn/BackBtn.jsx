import { useNavigate } from "react-router-dom";
import "./BackBtn.scss";

const BackBtn = ({ value, url }) => {

    const navigate = useNavigate()

    const navigation = () => {
        navigate(url)
    }

    return (
        <button onClick={() => navigation()}>
            {value}
        </button> 
        );
}
 
export default BackBtn;