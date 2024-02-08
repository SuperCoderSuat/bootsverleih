import { useNavigate } from "react-router-dom";
import "./RemoveBtn.scss";

const RemoveBtn = ({ value, id }) => {

    const navigate = useNavigate()

    const showConfirm = () => {
        const auswahl = window.confirm("wirklich löschen?")
        if (auswahl) {
            deleteEntry()
        }
    }

    const deleteEntry = () => {
        fetch(`http://localhost:3000/api/v1/boote/${id}`, {
            method: "DELETE",
        })
        .then((res) => res.json())
        .then(({ success, result, error }) => {
            console.log(success, error, result);
            if (!success) console.log(error);
            else {
                console.log("löschen erfolgreich");
                navigate("/boote")
            }
        })
    }

    return ( 
        <button onClick={() => showConfirm()}>
            {value}
        </button>
     );
}
 
export default RemoveBtn;