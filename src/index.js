import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//#region : ex1
import React from "react";

function Eleve({ nom, prenom, age }) {
  const formatPrenom = (prenom) =>
     prenom
       .split(" ")
      .map((p) => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase())
      .join(" ");

  return (
    <div>
      <p><strong>Nom:</strong> {nom.toUpperCase()}</p>
      <p><strong>Prénom:</strong> {formatPrenom(prenom)}</p>
      <p><strong>Âge:</strong> {age}</p>
      <hr />
    </div>
  );
}

export default function Groupe() {
  const eleves = [
    { nom: "alaoui", prénom: "sabah", age: "13" },
    { nom: "mahdi", prénom: "mohamed amine", age: "17" },
    { nom: "fahmi", prénom: "omar", age: "12" },
  ];

  return (
    <div>
      <h2>Liste des élèves</h2>
      {eleves.map((el, i) => (
        <Eleve key={i} nom={el.nom} prenom={el.prénom} age={el.age} />
      ))}
    </div>
  );
}

//#endregion

//#region : ex2

// import React, { Component } from "react";

// class Eleve extends Component {
//   formatPrenom(prenom) {
//     return prenom
//       .split(" ")
//       .map((p) => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase())
//       .join(" ");
//   }

//   render() {
//     const { nom, prenom, age } = this.props;
//     return (
//       <div>
//         <p><strong>Nom:</strong> {nom.toUpperCase()}</p>
//         <p><strong>Prénom:</strong> {this.formatPrenom(prenom)}</p>
//         <p><strong>Âge:</strong> {age}</p>
//         <hr />
//       </div>
//     );
//   }
// }

// export default class Groupe extends Component {
//   render() {
//     const eleves = [
//       { nom: "alaoui", prénom: "sabah", age: "13" },
//       { nom: "mahdi", prénom: "mohamed amine", age: "17" },
//       { nom: "fahmi", prénom: "omar", age: "12" },
//     ];
//     return (
//       <div>
//         <h2>Liste des élèves (classe)</h2>
//         {eleves.map((e, i) => (
//           <Eleve key={i} nom={e.nom} prenom={e.prénom} age={e.age} />
//         ))}
//       </div>
//     );
//   }
// }

//#endregion
//#region : ex3/1

// import React from "react";

// export function Fruit({ nom, couleur, image }) {
//   return (
//     <div style={{ border: "1px solid #ccc", padding: "10px", margin: "5px", borderRadius: "10px" }}>
//       <h3>{nom}</h3>
//       <p>Couleur : {couleur}</p>
//       <img src={image} alt={nom} width="100" />
//     </div>
//   );
// }
//#endregion
//#region : ex3/2
// import React, { Component } from "react";
// import { Fruit } from "./Fruit";

// export default class TheFruits extends Component {
//   render() {
//     const fruits = [
//       { nom: "Pomme", couleur: "Rouge", image: "images/pomme.png" },
//       { nom: "Banane", couleur: "Jaune", image: "images/banane.png" },
//       { nom: "Orange", couleur: "Orange", image: "images/orange.png" },
//     ];

//     return (
//       <div>
//         <h2>Les Fruits</h2>
//         <div style={{ display: "flex", gap: "10px" }}>
//           {fruits.map((f, i) => (
//             <Fruit key={i} nom={f.nom} couleur={f.couleur} image={f.image} />
//           ))}
//         </div>
//       </div>
//     );
//   }
// }
//#endregion

//#region : ex4
import React from "react";

const villes = [
  {
    nom: "Tokyo",
    pays: "Japan",
    population: "37,340,000",
    description:
      'Tokyo is the most populated city in the world, located on the eastern coast of Honshu.',
    image: "images/tokyo.jpg",
  },
  {
    nom: "Delhi",
    pays: "India",
    population: "31,181,000",
    description:
      "Delhi, the capital of India, is the country's largest city and second most populous in the world.",
    image: "images/delhi.jpg",
  },
  {
    nom: "Shanghai",
    pays: "China",
    population: "27,796,000",
    description:
      "Shanghai is China's most populated and wealthiest city, located in the Yangtze River Delta.",
    image: "images/shanghai.jpg",
  },
];

export default function Todo() {
  return (
    <div>
      <h2>Liste des grandes villes</h2>
      {villes.map((v, i) => (
        <div key={i} style={{ border: "1px solid gray", borderRadius: "10px", margin: "10px", padding: "10px" }}>
          <h3>
            {v.nom}, {v.pays}
          </h3>
          <p><strong>Population:</strong> {v.population}</p>
          <p>{v.description}</p>
          <img src={v.image} alt={v.nom} width="200" />
        </div>
      ))}
    </div>
  );
}
//#endregion