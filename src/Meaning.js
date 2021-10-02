import React from "react";
import Synonyms from "./Synonyms.js";
import "./Meaning.css";

export default function Meaning(props){
  console.log(props.meaning);
  return (
  <div className="Meaning">
    <section>
    <h4>{props.meaning.partOfSpeech}</h4>
    {props.meaning.definitions.map(function(definition, index){
      return (
        <div key={index}>
          <p><strong>Definiton: </strong>{definition.definition}</p>
          <p><em>{definition.example}</em></p>
          <Synonyms synonyms={definition.synonyms} />
        </div>
      )
    })}
   </section>
  </div>
  );
}