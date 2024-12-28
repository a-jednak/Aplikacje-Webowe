import React, { useState } from "react";

const Komentarz = ({ id, body, postId, likes, user }) => {
  const [likesCount, setLikesCount] = useState(likes);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    if (!liked) {
      setLikesCount(likesCount + 1);
      setLiked(true);
      setDisliked(false);
    } else {
      setLikesCount(likesCount - 1);
      setLiked(false);
    }
  };

  const handleDislike = () => {
    if (!disliked) {
      setLikesCount(likesCount - 1);
      setDisliked(true);
      setLiked(false);
    } else {
      setLikesCount(likesCount + 1);
      setDisliked(false);
    }
  };

  return (
    <div style={styles.commentContainer}>
      <div style={styles.header}>
        <h3>
          {user.fullName} ({user.username})
        </h3>
        <span style={styles.postId}>Post ID: {postId}</span>
      </div>
      <p style={styles.body}>{body}</p>
      <div style={styles.footer}>
        <span style={styles.likes}>Likes: {likesCount}</span>
        <button onClick={handleLike} style={styles.likeButton}>
          Like
        </button>
        <button onClick={handleDislike} style={styles.dislikeButton}>
          Dislike
        </button>
      </div>
    </div>
  );
};

const styles = {
  commentContainer: {
    border: "1px solid #ddd",
    padding: "15px",
    marginBottom: "15px",
    backgroundColor: "#f9f9f9",
    width: "300px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  postId: {
    fontSize: "0.8em",
    color: "#888",
  },
  body: {
    fontSize: "1em",
    marginTop: "10px",
  },
  footer: {
    marginTop: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  likes: {
    fontWeight: "bold",
  },
  likeButton: {
    backgroundColor: "#96ce82",
    color: "white",
    border: "none",
    padding: "5px 10px",
  },
  dislikeButton: {
    backgroundColor: "#c53737",
    color: "white",
    border: "none",
    padding: "5px 10px",
  },
};

const App = () => {
  const user = {
    id: 1,
    username: "literallyHamilton",
    fullName: "Lin-Manuel Miranda",
  };

  return (
    <div>
      <Komentarz id={1} body="Trash music" postId={101} likes={5} user={user} />
    </div>
  );
};

export default App;
