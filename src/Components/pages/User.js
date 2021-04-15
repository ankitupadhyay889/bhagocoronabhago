import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const User = () => {
  const [show, setshow] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { id } = useParams();

  const getData = async () => {
    const res = await fetch(`http://localhost:3000/users/${id}`, {
      method: "GET",
    });
    setshow(await res.json());
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container py-4">
        <h1 className="display-4">User Id: {id}</h1>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <td> {show.name} </td>
          <td> {show.username} </td>
          <td> {show.email} </td>
        </tbody>
      </table>
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <hr />
    </div>
  );
};

export default User;
