import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [user, setuser] = useState([]);

  const loadDa = async () => {
    const res = await fetch("http://localhost:3000/users");
    console.log(res);
    setuser(await res.json());
  };

  useEffect(() => {
    loadDa();
  }, []);

  const delUser = async(id) => {
    const del = await fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    });
    const dataGya = await del.json();
    console.log(dataGya);
    loadDa();
  };

  return (
    <div>
      <h1> User Details </h1>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item, i) => (
            <tr>
              <th scope="row">{i + 1}</th>
              <td> {item.name} </td>
              <td> {item.username} </td>
              <td> {item.email} </td>
              <td>
                <Link to={`/pages/${item.id}`} class="btn btn-primary mr-2">View</Link>
                <Link to={`/pages/edit/${item.id}`} class="btn btn-outline-primary mr-2">Edit</Link>
                <Link to="#" onClick={()=>delUser(item.id)} class="btn btn-danger">Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
