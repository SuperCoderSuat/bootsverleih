import "./UebersichtBtn.scss";

const UebersichtBtn = ({baujahr, seriennummer, bootsart }) => {
    return ( <div>Bootsnr.: {seriennummer}, Baujahr: {baujahr}, Bootsart: {bootsart}</div> );
}
 
export default UebersichtBtn;