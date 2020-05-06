import React, { useState, setState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Avatar from "./img/avatar.jpg";
import Female from "./img/female_avatar.png";
import TimerComponent from "./components/Timer";

function App() {
  const [blog, setBlog] = useState([]);
  const [post, setPost] = useState({});
  const [edit, setEdit] = useState({});
  const [time, setTime] = useState(10);
  const [effecttime, setEffectTime] = useState(10);
  const changeSubmit = (e) => {
    e.preventDefault();
    setBlog([
      ...blog,
      {
        id: blog.length + 1,
        personName: post.personName,
        dateOfBirth: post.dateOfBirth,
        lisenceCategory: post.lisenceCategory,
        expiryDate: post.expiryDate,
        issueDate: post.issueDate,
      },
    ]);
  };

  const onChangeHandaler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name);

    setPost({ ...post, [name]: value });
  };

  const deleteIdCards = (id) => {
    const result = blog.filter((element) => element.id !== id);
    setBlog(result);
  };

  const editCards = (data, editedMessage) => {
    setEdit({ id: data.id });
    console.log(edit);
  };

  return (
    <div className="App">
      <Router>
        <Route
          exact
          path="/timer"
          render={() => (
            <div>
              <TimerComponent />
              <Link to="/">ID card factory</Link>
            </div>
          )}
        />

        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Link to="/timer">Click for the timer</Link>
              <div className="myInputs">
                Name:
                <input
                  name="personName"
                  //onClick={onChangeHandalerName}
                  value={post.personName}
                  placeholder="Please enter your full name"
                  onChange={onChangeHandaler}
                  id="inputField"
                />
                DOB:
                <input
                  name="dateOfBirth"
                  //onClick={onChangeHandalerDOB}
                  value={post.dateOfBirth}
                  placeholder="Please enter your D.O.B"
                  onChange={onChangeHandaler}
                  id="inputField"
                />
                Category:
                <input
                  name="lisenceCategory"
                  //onClick={onChangeHandalerCat}
                  value={post.lisenceCategory}
                  placeholder="category"
                  onChange={onChangeHandaler}
                  id="inputField"
                />
                Issue Date:
                <input
                  name="issueDate"
                  //onClick={onChangeHandalerIssue}
                  value={post.issueDate}
                  placeholder="Please enter date of issue"
                  onChange={onChangeHandaler}
                  id="inputField"
                />
                Expiry Date:
                <input
                  name="expiryDate"
                  //onClick={onChangeHandalerExp}
                  value={post.expiryDate}
                  placeholder="Please enter your expiry"
                  onChange={onChangeHandaler}
                  id="inputField"
                  type="date"
                />
                <button onClick={changeSubmit} id="buttons">
                  Save
                </button>
              </div>
              {blog.map((data) => (
                <div className="newPtags">
                  <div className="card">
                    <button onClick={() => deleteIdCards(data.id)}>X</button>
                    <button onClick={() => editCards(data, "editedMessage")}>
                      Edit
                    </button>
                    <img
                      className="idImage"
                      src={data.lisenceCategory === "M" ? Avatar : Female}
                      alt="image"
                    />
                    {edit.id === data.id ? (
                      <input
                        name="personName"
                        //onClick={onChangeHandalerName}
                        value={post.personName}
                        placeholder="Please enter your full name"
                        onChange={onChangeHandaler}
                        id="inputField"
                      />
                    ) : (
                      <h5>{data.personName}</h5>
                    )}
                    <label>Date of Birth</label>
                    <p>{data.dateOfBirth}</p>
                    <label>Lisence category</label>
                    <p>{data.lisenceCategory}</p>
                    <label>Date of Issue</label>
                    <p>{data.issueDate}</p>
                    <label>Date of expiry</label>
                    <p>{data.expiryDate}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        />
      </Router>
    </div>
  );
}

export default App;
