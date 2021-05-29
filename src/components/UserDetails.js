import React, { useEffect, useState } from "react";
import axios from "axios";
const UsersDetails = () => {
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
      <h2 style={{ textAlign: "center" }}>User Details list</h2>
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
                            <h6 className="mb-0">Full Name</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            {curElem.name}
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Email</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            {curElem.email}
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Phone</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            {curElem.phone}
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-12">
                            <a
                              className="btn btn-info "
                              target="__blank"
                              href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills"
                            >
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
          </div>
        );
      })}
    </>
  );
};

export default UsersDetails;
