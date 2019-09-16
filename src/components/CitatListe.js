import React from 'react'

// () er postkassen
// Map looper. Den kigger i arrayen og først på 1 og så 2 o.s.v og udskriver dem en ad gangen
// Citatet der bliver 'peget på' af map'eren hedder citatet
// Props består lige nu af to ting: alleCitater ... og en deleteCitat

const CitatListe = (props) => {

const alleCitater = props.alleCitaterProp.map(citatet => {
                
    return (

    <div className="citat" key={citatet.id}>
       <h3>{citatet.titel}</h3>
       <p>"{citatet.citattxt}"</p>
       <p><i>{citatet.forfatter}</i></p>
       <button className="waves-effect waves-light btn red" onClick={  () => {props.sletCitatProp(citatet.id)}  }><i class="far fa-trash-alt material-icons left"></i>SLET</button>
    </div>

    ) // () => Skal være der, så id'en kommer med fra App.js
})

    return (
        <div className="container citaterne">

           {alleCitater}

           {/*{ props.alleCitaterProp[0].titel }*/}


        </div>
    )
}

export default CitatListe
