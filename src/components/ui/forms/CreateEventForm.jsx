import { useState } from "react";
import "../../Style/FormStyle/form.css";
import "../../Style/TextInputStyle/textInput.css";

export const CreateEventForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleCategoryInput = () => {
    console.log("werkt");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      createdBy: 1,
      title,
      description,
      image,
      categoryIds: [1],
      location,
      startTime,
      endTime,
    };

    fetch("http://localhost:3000/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    }).then(() => {
      console.log("gelukt");
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="textInput"
        placeholder="Title"
        required
        value={title}
        onChange={(title) => setTitle(title.target.value)}
      ></input>
      <input
        type="text"
        className="textInput"
        placeholder="Description"
        required
        value={description}
        onChange={(description) => setDescription(description.target.value)}
      ></input>
      <input
        className="textInput"
        placeholder="Image link"
        required
        value={image}
        onChange={(image) => setImage(image.target.value)}
      ></input>

      <input
        className="textInput"
        placeholder="Location"
        required
        value={location}
        onChange={(location) => setLocation(location.target.value)}
      ></input>
      <input
        className="textInput"
        placeholder="Start time"
        required
        value={startTime}
        onChange={(startTime) => setStartTime(startTime.target.value)}
      ></input>
      <input
        className="textInput"
        placeholder="End time"
        required
        value={endTime}
        onChange={(endTime) => setEndTime(endTime.target.value)}
      ></input>
      <div className="categoriesContainer">
        <p>Categories:</p>
        <div className="categories">
          <label htmlFor="sports ">Sports</label>
          <input
            type="checkbox"
            name="categories"
            value={1}
            id="sports"
            onChange={handleCategoryInput}
          />
          <label htmlFor="games ">Games</label>
          <input
            type="checkbox"
            name="categories"
            value={2}
            id="games"
            onChange={handleCategoryInput}
          />
          <label htmlFor="relaxation ">Relaxation</label>
          <input
            type="checkbox"
            name="categories"
            value={3}
            id="relaxation"
            onChange={handleCategoryInput}
          />
        </div>
      </div>
      <button className="button" type="submit">
        Submit
      </button>
    </form>
  );
};
