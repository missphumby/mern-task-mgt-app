import React, { useState } from "react";
// import axios from "axios";
import messages from "../shared/AutoDismissAlert/messages";

const CreateTask = (props) => {
  const { msgAlert, user } = props;
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [completed, setCompleted] = useState(false);
  const [description, setDescription] = useState("");
  const token = localStorage.getItem("token");
  const submitHandler = (e) => {
    e.preventDefault();
    if (token != null) {
      fetch("http://localhost:8000/tasks", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: user.token,
        },
        body: JSON.stringify({
          task: {
            title,
            description,
            category,
            completed,
          },
        }),
      })
        .then((res) => {
          // console.log(res.data);
          setTitle("");
          setDescription("");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      msgAlert({
        heading: "Please Sign in First",
        message: messages.signInFailure,
        variant: "danger",
      });
    }
  };
  return (
    <div className="create-form">
      <h2>Fill the form below to add a new Task</h2>
      <form onSubmit={submitHandler}>
        <div className="form-fields">
          <label for="fruit-select">Select a Fruit: </label>
          <select
            id="category"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            name="category"
            type="text"
            required={true}
          >
            <option value="default" selected>
              Select a Category
            </option>
            <option value="Mindfulness">Mindfulness</option>
            <option value="Stress Relief">Stress Relief</option>
            <option value="Breathwork">Breathwork</option>
          </select>
        </div>
        <div className="form-fields">
          <label>Title: </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            name="title"
            type="text"
            required={true}
          />
        </div>

        <div className="form-fields ">
          <label>Description: </label>
          <input
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            name="description"
            type="text"
            required={true}
            minLength={5}
          />
        </div>

        <div className="form-fields form-fields-check">
          <label>Completed: </label>
          <input
            type="checkbox"
            checked={completed}
            value={completed}
            onChange={(e) => setCompleted(e.currentTarget.checked)}
          />
        </div>
        <br />
        {}
        <input className="submit-input" type="submit" value="Create" />
      </form>
    </div>
  );
};
export default CreateTask;
