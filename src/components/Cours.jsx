import {Component} from 'react';

import { Link } from "react-router-dom"; 
import './Cours.css';
import Footer from './Footeur';




class Cours extends Component {
    state = {
        LienImage: "/public/Image Video/Image/BoxeCross-Fit.jpg",  
        data: [],
     }

     ImageOnclick =( type,IMG,Description) => {
       // <CourSpeciale />
       console.log("clique image ");
       console.log(type);
       console.log(IMG);
       console.log(Description);
    
     }
   
     componentDidMount() {
      fetch('http://localhost:8081/Cours')
        .then(response => {
          if (!response.ok) {
            throw new Error('Échec de la requête');
          }
          return response.json();
        })
        .then(data => { console.log('OK', data)
          this.setState({
            data: data  // Correction ici
          });
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des données :', error);
        });
    }
  
    
    
    render() {
        //console.log(data.id);
        return (
            <div> 
                  <div className="image">
                       <div className='ImageBoxe'>
                         <img  src= {this.state.LienImage}></img>
                       </div>
                       <div className="InfoSurImage">
                         <h1>
                         <span className="spantitre">
                            NOS COURS<br />
                            </span>
                            DE BOXE & CROSS-FIT 
                         </h1>
                       </div>
                    </div>
                    <div className="Decouvert">
                 <p>  Nous vous accompagnons pour atteindre vos objectifs tout en acquérant la technique vous convenant.</p> 

                 <p> Noble Art Club est fait pour vous si vous souhaitez :</p> 
                 <p> 
                  Découvrir la boxe
                  <br></br>
                  Vous préparez à un combat
                  <br></br>
                 Perdre du poids
                 <br></br>
                Tonifier son corps et ses muscles
                <br></br>
                Évacuer le stress après une journée éprouvante
                <br></br>
                Améliorer vos réflexes et votre coordination
                 </p> 
                    </div>
                  <div>
                  <h1>Données depuis le serveur Express :</h1>
                  
                     <ul className='CardCour'>
                      {this.state.data.map((item, index) => ( 
                      <li key={index}>
                        <div >
                        <Link to="CoursSpecifique"><img src={item.IMG} alt={item.Type}/></Link>
                        
                        <Link to={{
                                pathname: 'CoursSpecifique',    
                                state: { type: item.Type, Img: item.IMG, Desc: item.Description }
                              }}>
                              {item.Type}
                        </Link>

                       
                         </div>
                         </li> 
                      ))}
                    </ul>
                  </div>
                <Footer/>
            </div>
        )
    }
}

export default Cours;