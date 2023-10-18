
import {Component} from 'react';
import './Accueil.css';
import Footer from './Footeur';

class Accueil extends Component {
   state = {
      LienImage: "/public/Image Video/Image/Sale.jpg",  
      LienImageBoxe: "/public/Image Video/Image/Boxe.jpg",  
      LienImageBoxe2: "/public/Image Video/Image/images.jpg",
   }
   Scrolldown =() =>{
    scrollBy(0, 652);
   }
    render() {
       
        return (
            <div>
                <div className="image">
                    <div className='ImageBoxe'>
                   <img  src= {this.state.LienImage}></img>
                    </div>
                    <div className="InfoSurImage">
                    <h1>LA BOXE EST UNE FORME D’EXPRESSION QUI MOTIVE UN ÊTRE HUMAIN À ÊTRE CE QU’IL EST VRAIMENT</h1>
                    <div className="InfoBootonReservation">
                        <div className="InfoBootonReservationPriver">
                     <button>RESERVER UN COURS PRIVE</button>
                        </div>
                        <div className="InfoBootonReservationColectif">
                     <button>RESERVER UN COURS COLLECTIF</button>
                        </div>
                     </div>
                     <div className="InfoButtonVideoReseau">
                     <div className="InfoBoutonVideo">
                     <button>GO</button>
                     </div>
                     <div className="Scrol">
                        <button onClick={this.Scrolldown}> <img src="/public/Image Video/Image/1691371.svg" type="Scroll" ></img></button>
                     </div>
                     <div className="InfoBoutonReseau">
                    <div className="InfoFaceBook">
                     <button>FaceBook</button>
                    </div>
                    <div className="InfoInsta">
                    <button>Insta</button>
                    </div>
                   
                     </div>
                     </div>
                     </div>
                     
                </div>
                   
                   <div className="Apropo">
                    <div className="TitreApropo">
                    <h2>A PROPOS DU NOBLE ART CLUB</h2> 
                    <h1>Le Noble Art Club est un club de coaching parisien haut de gamme qui propose une méthode globale d’entraînement.</h1>
                    </div>
                    <div>
                    </div>
                    <div className="AventageSport_histoire">
                        <div className="histoire">
                        <p>SINCE</p>
                        <h2>2016</h2>
                        </div > 
                        <div className="AventageSport">
                        <p>Le socle de notre démarche repose sur notre savoir-faire et sur les valeurs auxquelles nous croyons et que nous déclinons dans toutes nos actions :</p>
                       <br/>
                        <p>AUTHENTICITÉ, DÉPASSEMENT DE SOI, ÉCOUTE, BIENVEILLANCE, RESPECT, HUMILITÉ</p> 
                        </div> 
                        </div>
                        </div>
                        <div className="Card">
                            <div className="Card_PHYSIQUE">                            
                                <h4>PRÉPARATION PHYSIQUE</h4>
                                <p>Besoin de vous préparer pour un évènement sportif ? Nos coach vous préparent mentalement et physiquement.</p>
                            </div>
                            <div className="Card_MUSCULAIRE">                           
                                <h4>RENFORCEMENE MUSCULAIRE</h4>
                                <p>Si vous souhaitez renforcer musculairement toute ou partie de votre corps, par des exercices et un objectif défini.</p>
                            </div>
                            <div className="Card_BOXE">                           
                                <h4>COURS DE BOXE</h4>
                                <p>Nos coachs vous forment à la pratique de la boxe Thaï, du kick Boxing, de la boxe Anglaise, du MMA (arts martiaux mixtes) à la Cardio Boxe.</p>
                            </div>
                            <div className="Card_RING">                         
                                <h4>UN RING DE BOXE, UN VRAI !</h4>
                                <p>Pour entrainer nos futurs champions de Boxe qui sont en train de lire ce texte.</p>
                            </div>
                            <div className="Card_DÉTENTE">                            
                                <h4>DÉTENTE</h4>
                                <p>À votre disposition :SaunaDouche privativeCosmétiques RITUALSServiettes</p>
                            </div>
                            </div>
                            <div className="animationRedirection">
                                  <div className="PLANNING_DES_COURS">
                                    <div className="PLANNING_DES_COURS_IMG">
                                  <img  src= {this.state.LienImageBoxe}></img>    

                                    </div>
                                    <div className="PLANNING_DES_COURS_text">
                                    <h2>PLANNING DES COURS COLLECTIFS</h2>
                                    <button>Consulter le planning </button>

                                    </div>
                                  </div>
                                  <div className="TARIFS_des_Cours">
                                    <div className="TARIFS_des_Cours_IMG">
                                  <img  src= {this.state.LienImageBoxe2}></img>  
                                    </div>
                                    <div  className="TARIFS_des_Cours_Text">
                                    <h2>TARIFS DES COURS</h2>
                                    <button>consulter les tarif</button>
                                    </div>
                                  </div>
                            </div>
                           <div className="video">
                           
                           <iframe width="100%" height="400" src="https://www.youtube.com/watch?v=YTReEro-OS4" type="video/ogg"></iframe>
                            
                           </div>
                       
                    
                  <Footer />
            </div>
        )
    }
}
export default Accueil