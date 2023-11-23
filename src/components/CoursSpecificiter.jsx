import { Component } from 'react';
import Footer from './Footeur';

class CoursSpecifique extends Component {
  

  render() {
   
    const {state } = useLocation();
    console.log(state);
    if (type !== undefined && Img !== undefined && Desc !== undefined) {
      console.log(type, Img, Desc);
  
      return (
        <div>
          <div>
            <h1>{type}</h1>
            <img src={Img} alt={type} />
            <p>{Desc}</p>
          </div>
          <Footer />
        </div>
      );
    } else {
      return (
        <div>
          <p>Les valeurs sont vides ou undefined. Vérifiez les props transmises.</p>
          <Footer />
        </div>
      );
    }
  }
}
  

export default CoursSpecifique;

