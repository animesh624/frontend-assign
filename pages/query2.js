import { useState, useEffect } from "react";

function query2() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://backendassign.onrender.com/query2')
          .then(response => response.json())
          .then(data => setData(data));
      }, []);
  return (
    <>
         <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Income</th>
            <th>City</th>
            <th>Car</th>
            <th>Phone Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user._id}>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.income}</td>
              <td>{user.city}</td>
              <td>{user.car}</td>
              <td>{user.phone_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default query2