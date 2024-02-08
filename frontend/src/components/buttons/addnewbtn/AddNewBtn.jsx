import { useNavigate } from "react-router-dom";
import "./AddNewBtn.scss";

const AddNewBtn = ({ url }) => {

    const navigate = useNavigate()

    const navigateNeuesBoot = () => {
        navigate(url)
    }

    return ( <button onClick={() => navigateNeuesBoot()} className="addnew_btn">+</button> );
}
 
export default AddNewBtn;

