import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
  const [Texts , setTexts] = useState([]);

  function addItem(newText){
    setTexts(pV => {
      return [...pV , newText]
    })
  }
  function deleteItem(id){
    setTexts(pV => {
      return pV.filter((item , index) => {
        return index !== id;
      })
    })
  }

  return (
   <div>
      <Header />
      <CreateArea onAdd={addItem}/>
      {Texts.map((item , index) => {
       return <Note 
       key={index} 
       id={index} 
       title={item.title} 
       content={item.content}
       onDelete={deleteItem} />
      })}
      <Footer />
    </div>
  );
}

export default App;
