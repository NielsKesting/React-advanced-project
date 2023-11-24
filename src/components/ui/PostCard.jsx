import "../Style/PostCardStyle/PostCard.css";
import { useLoaderData } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import { users } from "../../data/events.json";
// import { categories } from "../../data/events.json";

export const PostCard = ({ post }) => {
  // const { id } = useParams();
  const { users, categories } = useLoaderData();

  const getUser = (createdBy) => {
    const user = users.filter((user) => user.id == createdBy);
    return user[0].name;
  };

  const getCategories = (postCategories) => {
    if (postCategories.length == 3) {
      return (
        "Categories: " +
        categories[0].name +
        " , " +
        categories[1].name +
        " & " +
        categories[2].name
      );
    } else if (postCategories.length == 2) {
      const postCategory1 = postCategories[0];
      const postCategory2 = postCategories[1];
      const categoryFilter = (postCategory) => {
        const categoryType = categories.filter(
          (category) => category.id == postCategory
        );
        return categoryType[0].name;
      };
      return (
        "Categories: " +
        categoryFilter(postCategory1) +
        " & " +
        categoryFilter(postCategory2)
      );
    } else {
      const oneCategory = categories.filter(
        (category) => category.id == postCategories
      );
      return "Category: " + oneCategory[0].name;
    }
  };

  const getTime = (info) => {
    return info.substring(0, 10) + " at: " + info.substring(11, 16);
  };

  return (
    <>
      <div className="postCard">
        <img className="postCardPicture" src={post.image}></img>
        <div className="postCardInfoBox">
          <h2>{post.title}</h2>
          <p>Posted by: {getUser(post.createdBy)}</p>
          <p>{post.description}</p>
          <p>Location: {post.location}</p>
          <p>{getCategories(post.categoryIds)}</p>
          <p>
            Starts: {getTime(post.startTime)} <br></br> Ends: {""}
            {getTime(post.endTime)}
          </p>
        </div>
      </div>
    </>
  );
};
