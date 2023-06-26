import React, { useState } from "react";

function CreateArea(props) {
const [Text, setText] = useState({
  title: "",
  content: ""
})

function handleChange(evt){
const {name , value} = evt.target;
setText(pV => {
  return {
    ...pV,
    [name]: value
  }
})
}
function handleClick(evt){
  props.onAdd(Text);
  setText({
    title: "",
    content: ""
  })
evt.preventDefault();
}

  return (
    <div>
      <form className="create-note">
        <input onChange={handleChange} name="title" placeholder="Title" value={Text.title}/>
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={Text.content} />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
