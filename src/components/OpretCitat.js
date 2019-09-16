// rce
import React, { Component } from 'react'

export class OpretCitat extends Component {

    state = {
        titel: null,
        citattxt: null,
        forfatter: null
    }

    // Håndter titel-input så det bliver puttet i state
    handleTitel = (e) => {
        //console.log(e.target.value)
        this.setState({
            titel: e.target.value
        });
    }

    // Citatet
    handleCitat = (e) => {
        //console.log(e.target.value)
        this.setState({
            citattxt: e.target.value
        });
    }

    // Forfatter
    handleForfatter = (e) => {
        //console.log(e.target.value)
        this.setState({
            forfatter: e.target.value
        });
    }

    handleGemCitat = (e) => {
        // Snup state (nyt citat) og 'send det' til opret-metoden i App.js
        e.preventDefault();
        this.props.opretCitatProp(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleGemCitat} className="container">
                
                <input type="text" placeholder="Titel" id="citatTitel" onChange={this.handleTitel}/>

                <br/>

                <input type="text" placeholder="Citat" id="citatTekst" onChange={this.handleCitat}/>

                <br/>

                <input type="text" placeholder="Forfatter navn" id="forfatterNavn" onChange={this.handleForfatter}/>

                <button className="waves-effect waves-light btn"><i class="far fa-save material-icons left"></i>GEM citatet</button>

            </form>
        )
    }
}

export default OpretCitat
