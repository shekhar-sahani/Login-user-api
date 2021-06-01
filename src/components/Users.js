import React, { useEffect, useState } from "react";
import axios from "axios";
import Heart from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";
const Users = ({ handleLogout }) => {
  const [users, setUsers] = useState([]);
  const [color, setColor] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function oneclick() {
    setColor("");
  }

  function doubleclick(id) {
    setColor("secondary");
    console.log("double-clicked", id);
  }

  return (
    <>
      <section className="hero">
        <nav>
          <h2>Welcome</h2>
          <button onClick={handleLogout}>Logout</button>
        </nav>
      </section>
      <h2 className="users">ALL USERS</h2>
      {users.map((curElem) => {
        return (
          <div key={curElem.id}>
            <div className="box">
              <div className="box-1">
                <div className="col-sm-6">
                  <div className="col-md-8">
                    <div className="card mb-3">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0"> Name: </h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            {curElem.name}
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Email:</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            {curElem.email}
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Phone:</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            {curElem.phone}
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-6">
                            <Link
                              className="btn btn-info"
                              to={"/user-details/" + curElem.id}
                            >
                              Details
                            </Link>
                          </div>
                          <div className="col-sm-6">
                            <button
                              type="button"
                              onClick={() => oneclick()}
                              onDoubleClick={() => doubleclick(curElem.id)}
                            >
                              <Heart color={color} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Users;
