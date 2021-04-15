import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const Add = () => {
  const{id} = useParams();
  let history = useHistory();

  const [user, setuser] = useState({
    name: "",username: "",email: "",
  });

  let name, value;
  const inO = (e) => {
    name = e.target.name;
    value = e.target.value;

    setuser({ ...user, [name]: value });
  };

  const loadUser = async() => {
    const result = await fetch(`http://localhost:3000/users/${id}`, {
        method: "GET",
      });
      const milGya = await result.json();
      console.log(milGya);
      setuser(milGya)
  }

  useEffect(() => {
      loadUser();
  }, [])

  const daSend = async (e) => {
    e.preventDefault();
    const { name, username, email } = user;
    const res = await fetch(`http://localhost:3000/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,username,email,
      }),
    });
    const dataGya = await res.json();
    console.log(dataGya);
    history.push("/");
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
        <form method="PUT">
          <div className="form-group">
            <input type="text" className="form-control form-control-lg" placeholder="Enter Your Name" name="name" value={user.name} onChange={inO} />
          </div>
          <div className="form-group">
            <input type="text" className="form-control form-control-lg" placeholder="Enter Your Username" name="username" value={user.username} onChange={inO} />
          </div>
          <div className="form-group">
            <input type="email" className="form-control form-control-lg" placeholder="Enter Your E-mail Address" name="email" value={user.email} onChange={inO}/>
          </div>
          <button onClick={daSend} className="btn btn-warning btn-block">
            Update User
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
