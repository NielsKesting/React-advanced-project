import React from "react";
import { useLoaderData, useParams, useContext } from "react-router-dom";
import { ActiveUserContext } from "../components/ActiveUserContext";
import "../components/Style/EventPageStyle/EventPage.css";

export const EventPage = () => {
  const { users, events, categories } = useLoaderData();
  const { id } = useParams();

  // Get current data
  const getCurrentEvent = events.filter((event) => event.id == parseInt(id));
  const currentEvent = getCurrentEvent[0];
  const activeUser = useContext(ActiveUserContext[0])

  console.log(activeUser)
  const showDeleteEdit = () => {
  if (currentEvent.id == activeUser.id){
    return (
      <>
        <input className="button">Delete</input>
        <input className="button">Edit</input>
      </>
    )
  }
  }

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
        {/* {showDeleteEdit()} */}
      </div>
    </>
  );
};
