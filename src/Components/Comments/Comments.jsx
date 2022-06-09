import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { productContext } from "../../Context/ProductContext";
import { authContext } from "../../Context/AuthContext";
import "./Comments.css";


const Comments = ({ id }) => {
  let dataTime = Math.floor(Date.now() / 1000);
  const { productDetails, getProduct, addComments } = useContext(productContext);
  const { email } = useContext(authContext)
  const [comment, setComment] = useState({
    name: email,
    commentText: "",
    time: dataTime,
  });

  function handleValues(e) {
    let newComment = {
      ...comment,
      [e.target.name]: e.target.value,
    };
    setComment(newComment);
  }

  function handleAddComment() {
    if (comment.commentText === "") {
      alert("Empty comment!");
    } else {
      productDetails.comments.push(comment);
      addComments(id, { ...productDetails });
      getProduct();
      setComment({
        name: email,
        commentText: "",
        time: dataTime,
      });
    }
  }

  function timeConverter(UNIX_timestamp) {
    let a = new Date(UNIX_timestamp * 1000);
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();
    let sec = a.getSeconds();
    let time =
      date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
    return time;
  }

  return (
    <div className="containerComments">
      <div className="commentsInput">
        <h3 style={{ margin: "0", opacity: "0.7" }}>
        You can leave a review here
        </h3>
        <p>
          <textarea
            name="commentText"
            type="text"
            value={comment.commentText}
            onChange={handleValues}
            cols="45"
            row="10"
            maxLength="1000"
          ></textarea>
        </p>
        {email ? (
          <button onClick={handleAddComment}>leave a comment</button>
        ) : (
          <>
            <p style={{ fontSize: "1.1rem", opacity: "0.5" }}>
              <em>Please register to leave a comment</em>
            </p>
            <Link to="/auth" style={{ textDecoration: "none" }}>
              <button>Register</button>
            </Link>
          </>
        )}
      </div>
      <div className="commentsRead">
        {productDetails.comments ? (
          productDetails.comments.map((item, index) => (
            <div key={index} className="commentUser">
              <div className="timeName">
                <p className="name">
                  <em>{item.name.match(/^([^@]*)@/)[1]}:</em>
                </p>
                <p className="time">
                  <em>{timeConverter(item.time)}</em>
                </p>
              </div>
              <p className="commentText">{item.commentText}</p>
            </div>
          ))
        ) : (
          <h2>Loading</h2>
        )}
      </div>
    </div>
  );
};

export default Comments;