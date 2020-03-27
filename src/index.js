import React from "react";
import ReactDOM from "react-dom";
import ShowPost from "./components/showPost";
import "./components/showPost/style.css";
ReactDOM.render(
  <React.StrictMode>
    <ShowPost
      author={{
        name: "Anakin skywalker",
        avatar:
          "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg",
        nickName: "@anakin_skywalkerr"
      }}
      content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
      image={
        "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale"
      }
      date={"27 бер."}
      comments={"1212"}
      retweets={"500"}
      likes={"12000"}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
