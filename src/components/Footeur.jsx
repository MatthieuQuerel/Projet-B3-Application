import './Footeur.css';
const Footer = ()=>{
    return (
    <div className="Footeur">
        <div className="FooteurInfoImage">
            <div className="FooteurImage">
            <img className="nav-Logo" src="/public/Image Video/Image/LOGO.png" alt="Logo Club"/>
            </div>
           <div className="FooteurInfo">
        <h1>POUR TOUTE QUESTION / RÉSERVATION</h1>
        <p>+33(0)1 47 54 91 95</p>
        <p>Pour toute question hors cours et réservation contactez nous: contact@nobleartclub.fr</p>
            </div> 
        </div>
       <div className ="LocalisationHoraire">
        <div className="Localisation">
            <h2>ADDRESSE</h2>
            <p>177 rue de Courcelles 75017 ParisFrance</p>
       
        
            <h2>ENCORE PLUS DE CONTENUS</h2>
            <p>on parle de nous !</p>
            <p>info légales</p>
            <p>contactez-nous</p>
        </div>
        <div className ="Horaire">
            <h2>HORAIRES OUVERTURE</h2>
            <p>Lundi - Vendredi
                 07:00 - 21:00</p>
            <p>Samedi 07:00 - 18:00</p>
            <p>Dimanche09:00 - 18:00</p>
        </div>
        </div>
    </div>
    )
}
export default Footer