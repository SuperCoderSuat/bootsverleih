import "./UebersichtReservierungenBtn.scss";

const UebersichtReservierungenBtn = ({buchungsnummer, seriennummer, termine }) => {
    return ( <div>Reservierungsnr.: {buchungsnummer}, Bootsnr.: {seriennummer}, Termine: {termine} </div> );
}
 
export default UebersichtReservierungenBtn;