import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
function CreateArea(props) {
  const[expand,setExpand]=React.useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  function handleExpand(){
    setExpand(true);
  }

  return (
    <div>
      <form  className="create-note">
        <div >
        {expand?<input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />:null}
        
        <div>
        <textarea
        onClick={handleExpand}
        name="content"
        onChange={handleChange}
        value={note.content}
        placeholder="Take a note..."
        rows={expand?"3":"1"}
      />
      <Zoom in={expand}>
        <Fab onClick={submitNote}>
        <AddIcon />
        </Fab>
        </Zoom>
        </div>
        
      
      
        </div>
      </form>
    </div>
  );
}

export default CreateArea;
