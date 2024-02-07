import "./RemoveBtn.scss";

const RemoveBtn = ({ value, id }) => {

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
            }
        })
    }

    return ( 
        <button onClick={() => deleteEntry()}>
            {value}
        </button>
     );
}
 
export default RemoveBtn;