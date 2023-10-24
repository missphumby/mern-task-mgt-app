import React from "react";
import { useEffect, useState } from "react";
import { MyTasks } from "../../api/task";
import { Link } from "react-router-dom";
import axios from "axios";
import apiUrl from "../../apiConfig";

const Profile = (props) => {
  const { msgAlert, user } = props;
  const token = localStorage.getItem("token");
  //preventing unauthorised users from accessing the page
  // if (!token && !userId) {
  //   window.location.href = "./sign-in";
  // }
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    MyTasks(user)
      .then((res) => {
        console.log("tasks===>", res.data.tasks);
        setTasks(res.data.tasks);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container-md">
      <h1>My Tasks</h1>

      {tasks.map((task, index) => (
        <div key={index} className="taskDetails">
          <Link to={`/task/${task._id}`}>
            {/* <b>Task Title:</b> */}
            {task.title}
          </Link>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Profile;
