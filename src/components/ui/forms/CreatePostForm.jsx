import { useState } from "react";

export function ControlledInputForm() {
  const [form, createForm] = useState();

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = 
  
  const formData = [inputValue ];
  return (
    <form>
      <input type="text" value={inputValue} onChange={handleChange}>
        image link
      </input>
      <input type="text" value={inputValue} onChange={handleChange}>
       name
      </input>
      <input type="text" value={inputValue} onChange={handleChange}>
        activity
        </input>
    </form>
  );
}
