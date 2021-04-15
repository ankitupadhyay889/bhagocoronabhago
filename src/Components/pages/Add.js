import React, { useState } from "react";
import { useHistory } from "react-router";

const Add = () => {
  let history = useHistory();

  const [user, setuser] = useState({
    name: "",
    username: "",
    email: "",
  });

  let name, value;
  const inO = (e) => {
    name = e.target.name;
    value = e.target.value;

    setuser({ ...user, [name]: value });
  };

  const daSend = async (e) => {
    e.preventDefault();
    const { name, username, email } = user;
    const res = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        username,
        email,
      }),
    });
    const dataGya = await res.json();
    console.log(dataGya);
    history.push("/");
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form method="POST">
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={user.name}
              onChange={inO}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={user.username}
              onChange={inO}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={user.email}
              onChange={inO}
            />
          </div>
          <button onClick={daSend} className="btn btn-primary btn-block">
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
