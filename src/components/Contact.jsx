import { Component } from 'react';
import Footer from './Footeur';

import './Contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Nom: '',
      prenom: '',
      adresse: '',
      licencier: 0, 
      dateNaissance: '', 
      age: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({ [e.target.adresse]: e.target.value }); 
    this.setState({ [e.target.prenom]: e.target.value });
    this.setState({ [e.target.age]: e.target.value });
    this.setState({ [e.target.Nom]: e.target.value });
    this.setState({ [e.target.dateNaissance]: e.target.value });
    this.setState({ [e.target.licencier]: e.target.value });
  };
  Champsremplie = async () => {
    if (
      this.state.adresse === "" ||
      this.state.prenom === "" ||
      this.state.age === "" ||
      this.state.Nom === "" ||
      this.state.dateNaissance === ""
    ) {
      alert("Il manque des infos");
    } else {
      try {
        const response = await fetch('http://localhost:8081/Contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.state),
        });
      
        const responseData = await response.text();
        console.log('Server Response:', responseData);
      
        if (response.ok) {
          console.log('envoie avec succès');
        } else {
          console.error('erreur envoie form data');
        }
      } catch (error) {
        console.error('Network error:', error);
      }      
    }
  };
  

  handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission using this.state.Nom
    console.log('Nom submitted:', this.state.Nom);
    
    console.log('prenom submitted:', this.state.prenom);
    
    console.log('adresse submitted:', this.state.adresse);
    
    console.log('licencier submitted:', this.state.licencier);
    
    console.log('date Naissance submitted:', this.state.dateNaissance);
    
    console.log('age submitted:', this.state.age);
  };

  render() {
    return (
      <div>
        <h1>CONTACT</h1>
        <form className="add-person-form" onSubmit={this.handleSubmit}>
          <label>
            Nom:
            <input
              type="text"
              name="Nom"
              value={this.state.Nom}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Prénom:
            <input type="text" name="prenom"  value={this.state.prenom} onChange={this.handleChange} />
          </label>
          <label>
            Adresse:
            <input type="text" name="adresse"  value={this.state.adresse} onChange={this.handleChange} />
          </label>
          <label>
            Licencier:
            <input type="checkbox" name="licencier"  value={this.state.licencier} onChange={this.handleChange} />
          </label>
          <label>
            Date de naissance:
            <input type="date" name="dateNaissance" value={this.state.dateNaissance} onChange={this.handleChange} />
          </label>
          <label>
            Âge:
            <input type="number" name="age" value={this.state.age} onChange={this.handleChange} />
          </label>
          <button  onClick={this.Champsremplie}>Ajouter</button>
        </form>
        <Footer />
      </div>
    );
  }
}

export default Contact;
