import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import messages from "../shared/AutoDismissAlert/messages";

const UpdateTask = (props) => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const [description, setDescription] = useState("");
  const [headerTitle, setHeaderTitle] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { user, msgAlert } = props;
  useEffect(() => {
    axios
      .get(`http://localhost:8000/tasks/${id}`, {
        headers: {
          Authorization: user.token,
        },
      })
      .then((res) => {
        console.log(res.data);
        setTitle(res.data.task.title);
        setCompleted(res.data.task.completed);
        setDescription(res.data.task.description);
        setHeaderTitle(res.data.task.title);
      })
      .catch((err) => console.log(err));
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    if (token != null) {
      axios
        .patch(`http://localhost:8000/tasks/${id}`, {
          task: {
            title,
            description,
            completed,
          },
        })

        // .then((res) => res.json())
        .then((res) => {
          console.log(res.data);
          navigate(`/profile`);
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
    <div>
      <header>Edit {headerTitle}</header>

      <form onSubmit={submitHandler}>
        <div className="form-fields">
          <label>Title</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            name="title"
            type="text"
          />
        </div>

        

        <div className="form-fields">
          <label>Description</label>
          <input
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            name="description"
            type="text"
          />
        </div>

        
        <div className="form-fields form-fields-check">
          <label>Completed</label>
          <input
            type="checkbox"
            checked={completed}
            value={completed}
            onChange={(e) => setCompleted(e.currentTarget.checked)}
          />
        </div>
        <br />
        {}
        <input class="submit-input" type="submit" value="Update" />
      </form>
    </div>
  );
};

export default UpdateTask;
