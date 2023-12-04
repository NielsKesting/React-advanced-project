import { useContext } from "react";
import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import { ActiveUserContext } from "../components/ActiveUserContext";
import "../components/Style/EventPageStyle/EventPage.css";

export const EventPage = () => {
  const { users, events, categories } = useLoaderData();
  const { id } = useParams();
  const navigateTo = useNavigate();

  // Get current data
  const getCurrentEvent = events.filter((event) => event.id == parseInt(id));
  const currentEvent = getCurrentEvent[0];
  const getActiveUser = useContext(ActiveUserContext)
  const activeUser = getActiveUser[0]

  const getMadeBy = users.filter(
    (user) => user.id == parseInt(currentEvent.createdBy)
  );
  const madeBy = getMadeBy[0];

  const getCurrentCategories = categories.filter(
    (category) => category.id == parseInt(currentEvent.categoryIds)
  );
  const currentCategories = getCurrentCategories[0];

  const getTime = (info) => {
    return info.substring(0, 10) + " at: " + info.substring(11, 16);
  };

  const handleDelete = () => {
    fetch(`http://localhost:3000/events/${id}`, {
      method: 'DELETE'
    })
    navigateTo("/");
  }

  if (currentEvent.createdBy === activeUser[0].id){
    return (
      <>
        <div className="eventPage">
          <div className="page">
            <img src={currentEvent.image}></img>
            <div className="infoBox">
              <h1>{currentEvent.title}</h1>
              <p>{currentEvent.description}</p>
              <br />
              <p>Starts at: {getTime(currentEvent.startTime)}</p>
              <p>Ends at: {getTime(currentEvent.endTime)}</p>
              <p>Categorie: {currentCategories.name}</p>
              <div className="buttonContainer">
                <button className="button" onClick={handleDelete}>Delete</button>
                <button className="button" type="button">Edit</button>
              </div>
            </div>
          </div>
          <div className="madeBy">
            <img src={madeBy.image}></img>
            <h1>{madeBy.name}</h1>
          </div>
        </div>
      </>
    )
  } else {
      return (
        <>
          <div className="eventPage">
            <div className="page">
              <img src={currentEvent.image}></img>
              <div className="infoBox">
                <h1>{currentEvent.title}</h1>
                <p>{currentEvent.description}</p>
                <br />
                <p>Starts at: {getTime(currentEvent.startTime)}</p>
                <p>Ends at: {getTime(currentEvent.endTime)}</p>
                <p>Categorie: {currentCategories.name}</p>
              </div>
            </div>
            <div className="madeBy">
              <img src={madeBy.image}></img>
              <h1>{madeBy.name}</h1>
            </div>
          </div>
        </>
      )   
  }  
};
