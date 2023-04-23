import { useState, useEffect } from "react";

function query5() {
    const [data, setData] = useState([]);

    // useEffect(() => {
    //   async function fetchData() {
    //     const response = await axios.get("https://backendassign.onrender.com/query1");
    //     setUsers(response.data);
    //   }
    //   fetchData();
    // }, []);
    useEffect(() => {
        fetch('https://backendassign.onrender.com/query5')
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
            <th>User Count</th>
            <th>Average Income</th>
            
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.user_count}</td>
              <td>{user.avg_income}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default query5;