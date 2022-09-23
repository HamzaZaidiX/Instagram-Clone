import React, { useState, useEffect } from "react";
import "./Post.css";
import { db } from "./firebase";

function Post({ postId, username, caption, imageUrl }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .onSnapShot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }

    return () => {
      unsubscribe();
    };
  }, [postId]);

  return (
    <div className="post">
      <div className="post_header">
        <img
          className="post_avatar"
          src="https://instagram.fkul19-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ad=z-m&_nc_ht=instagram.fkul19-1.fna.fbcdn.net&_nc_ohc=Tozzka4qhygAX9nQ1Zx&oh=41e6435793149982e727bd0b3a7edaac&oe=6050148F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"
          alt="no-image"
          width="40"
          height="40"
        />
        <h3>{username}</h3>
      </div>

      {/* header -> avatar + username */}

      <img className="post_image" src={imageUrl} />
      {/* image */}

      <h4 className="post_text">
        <strong>{username}</strong> {caption}{" "}
      </h4>
      {/* username + caption */}
    </div>
  );
}

export default Post;
