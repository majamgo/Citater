import React, { Component } from 'react';
import CitatListe from './components/CitatListe';
import OpretCitat from './components/OpretCitat';

class App extends Component {

  state = {
    //Array med forskellige keys med values
    citater: [
      { titel: "Intet ved", citattxt: "Alt, hvad jeg ved, er, at jeg intet ved.", forfatter: "Sokrates", id: 1 },
      { titel: "Det klarer jeg", citattxt: "Det har jeg aldrig gjort før, så det klarer jeg helt sikkert.", forfatter: "Pippi Langstrømpe", id: 2 },
      { titel: "Løsninger", citattxt: "Find ikke fejl, find en løsning.", forfatter: "Henry Ford", id: 3 },
      { titel: "Sig selv", citattxt: "Vær dig selv, alle andre er alligevel optaget.", forfatter: "Oscar Wilde", id: 4 },
      { titel: "Syng!", citattxt: "Når du står i lort til halsen, er alt, hvad du kan gøre, at synge.", forfatter: "Samuel Beckett", id: 5 }
    ]
  }

  // Slet citat - modtager id så vi kan slette det rigtige citat
  // Filter filtrerer alt væk, så det kun er id'en der slettes
  sletCitat = (id) => {

    // Filtrer uønsket citat fra listen af citater og gem den nye liste i en variabel (citaterFiltreret)
    let citaterFiltreret = this.state.citater.filter(citatet => {

      return citatet.id !== id // Returner c/citatet HVIS dets id er forskellig fra id-som-sendes-med-fra-button

    });

    // Overskriv state med den nye filtrerede liste med citater
    this.setState({

      citater: citaterFiltreret

    });
  }

  opretCitat = (nytCitat) => {

    nytCitat.id = Math.random(); // Giv citatet en id

    let alleCitater = [nytCitat, ...this.state.citater]; // Alle citater fra state en for en (...) + det nye citat

    // Gem alt det nye i state (overskriver det gamle indhold i state)
    this.setState({
      citater: alleCitater
    });
  }

  // Render forholder sig til koden
  // <CitatListe> Alt fra den components return kommer herhen. 
  // Dernæst har jeg sendt en prop / 'pakke' til CitatListe componenten

  render() {
    return (
      <div>
        
       <h1 className="center">Citater</h1>
       <h4 className="center">Indsæt dit eget citat her nedenunder!</h4>
       
       <OpretCitat opretCitatProp={this.opretCitat}/>

       <CitatListe alleCitaterProp={this.state.citater} sletCitatProp={this.sletCitat}/>

      </div>
    )
  }
}

//Den kan exporteres ud til andre filer
export default App
