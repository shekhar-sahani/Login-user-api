import React, { useEffect, useState } from "react";
import axios from "axios";
const Users = ({ handleLogout }) => {
  const [users, setUsers] = useState([]);

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
  //   const getUsers = async () => {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/users"
  //     );
  //     console.log(response);
  //     setUsers(response.json());
  //   };

  //   getUsers();
  // }, []);
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
          <div key={curElem.id} className="box">
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
                        <div className="col-sm-12">
                          <a className="btn btn-info" href="user-details">
                            Details
                          </a>
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
