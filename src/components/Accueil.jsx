
import {Component} from 'react';
import './Accueil.css';
import Footer from './Footeur';

class Accueil extends Component {
   state = {
      LienImage: "/public/Image Video/Image/Sale.jpg",
   }
    render() {
       
        return (
            <div>
                <div className="image">
                    <div>
                   <img className='ImageBoxe' src= {this.state.LienImage}></img>
                    </div>
                    <h1>LA BOXE EST UNE FORME D’EXPRESSION QUI MOTIVE UN ÊTRE HUMAIN À ÊTRE CE QU’IL EST VRAIMENT</h1>
                     <button>RESERVER UN COURS PRIVE</button>
                     <button>RESERVER UN COURS COLLECTIF</button>
                     <button>Video youtube de box</button>
                     <button>FaceBook</button>
                     <button>Insta</button>
                   </div>
                   <div className="Apropo">
                    <div className="TitreApropo">
                    <h2>A PROPOS DU NOBLE ART CLUB</h2> 
                    <h1>Le Noble Art Club est un club de coaching parisien haut de gamme qui propose une méthode globale d’entraînement.</h1>
                    </div>
                    <div>
                    </div>
                        <div className="histoir">
                        <p>SINCE</p>
                        <p>2016</p>
                        </div > 
                        <div className="AventageSport">
                        <p>Le socle de notre démarche repose sur notre savoir-faire et sur les valeurs auxquelles nous croyons et que nous déclinons dans toutes nos actions :</p>
                        <p>AUTHENTICITÉ, DÉPASSEMENT DE SOI, ÉCOUTE, BIENVEILLANCE, RESPECT, HUMILITÉ</p> 
                        </div> 
                        </div>
                        <div>
                            <div>                            
                                <h4>PRÉPARATION PHYSIQUE</h4>
                                <p>Besoin de vous préparer pour un évènement sportif ? Nos coach vous préparent mentalement et physiquement.</p>
                            </div>
                            <div>                           
                                <h4>RENFORCEMENE MUSCULAIRE</h4>
                                <p>Si vous souhaitez renforcer musculairement toute ou partie de votre corps, par des exercices et un objectif défini.</p>
                            </div>
                            <div>                           
                                <h4>COURS DE BOXE</h4>
                                <p>Nos coachs vous forment à la pratique de la boxe Thaï, du kick Boxing, de la boxe Anglaise, du MMA (arts martiaux mixtes) à la Cardio Boxe.</p>
                            </div>
                            <div>                         
                                <h4>UN RING DE BOXE, UN VRAI !</h4>
                                <p>Pour entrainer nos futurs champions de Boxe qui sont en train de lire ce texte.</p>
                            </div>
                            <div>                            
                                <h4>DÉTENTE</h4>
                                <p>À votre disposition :SaunaDouche privativeCosmétiques RITUALSServiettes</p>
                            </div>
                            </div>
                            <div className="animationRedirection">
                                  <div>

                                    <h2>PLANNING DES COURS COLLECTIFS</h2>
                                    <button>Consulter le planing </button>
                                  </div>
                                  <div>
                                    
                                    <h2>TARIFS DES COURS</h2>
                                    <button>consulter les tarif</button>
                                  </div>
                            </div>
                           <div className="video">
                           <video controls width="250">
                               <source src="/public/Image Video/Vidéo/Arrière-plan Zoom 1920x1080  px.mp4" type="video/webm" />
                            </video>
                           </div>
                       
                    
                  <Footer />
            </div>
        )
    }
}
export default Accueil