import React, { useState, useEffect } from "react";
import { Button, TextField, Grid } from "@mui/material";

function MyScreen() {
  const [textFieldValue, setTextFieldValue] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://my-api.com/items")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const handleTextFieldChange = (event) => {
    setTextFieldValue(event.target.value);
  };

  const handleButtonClick = () => {
    console.log(textFieldValue);
  };

  return (
    <div>
      <TextField value={textFieldValue} onChange={handleTextFieldChange} />
      <Button onClick={handleButtonClick}>Submit</Button>
      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid item xs={6} key={item.id}>
            {item.name}
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default MyScreen;
