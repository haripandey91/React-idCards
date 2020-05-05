import React, { useState, setState } from "react";
//import Section from "./comonent/Section";
import "./App.css";

function App() {
  const [blog, setBlog] = useState([{
    id: 1,
    post: "this is post,this is post,this is post,this is post,this is post,",
  },
]);
  const [post, setPost] = useState({});

  const changeSubmit = () => {
    setBlog([...blog,{id: blog.length +1, post:post}]);
    console.log(blog); 
  };

  const onChangeHandaler = (e) => {
    //const name = e.target.name; //// 
    const name = e.target.name;
    const value = e.target.value;
    setPost(value);
    console.log("Inputs", value);
  };
  
  return (
    <div className="App">
      <div>
        Input:
        <textarea
          name="post"
          onClick={onChangeHandaler}
          value={post.post}
          placeholder="Please enter your post"
          onChange={onChangeHandaler}
          id = "inputField"
        />
        <button onClick={changeSubmit} id="buttons">Save</button>
      </div>
      {
        blog.map(element => (
        <div className="newPtags">
          <p id="idTag">{element.id}</p>
          <p>{element.post}</p>
        </div>
      )) }
    </div> 
  );
}


export default App;