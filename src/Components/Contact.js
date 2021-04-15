import React, { useState } from "react";

const Contact = () => {

    const [user, setuser] = useState({
        email:"" , password:""
    });

    let name , value;
    const inO = (e) => {
        name = e.target.name;
        value = e.target.value;

        setuser({...user , [name] : value});
    }

  return (
    <div className="container">
    <div className="w-75 mx-auto shadow p-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <form>
        <div className="form-group">
          <input
            type="email"
            className="form-control form-control-lg"
            placeholder="Enter Your Name"
            name="email"
            value={user.email}
            onChange={inO}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control form-control-lg"
            placeholder="Enter Your E-mail Address"
            name="password"
            value={user.password}
            onChange={inO}
          />
        </div>
        <button className="btn btn-primary btn-block">Add User</button>
      </form>
    </div>
  </div>
  );
};

export default Contact;
