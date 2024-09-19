import { useState, useEffect } from "react";
import axios from "axios";

const UserCard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container mx-auto p-4 bg-black">
      <h1 className="text-3xl font-bold text-center mb-6">User List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h5 className="text-xl font-semibold mb-2">{user.name}</h5>
              <p className="text-gray-700 mb-2">
                Email: <span className="font-medium">{user.email}</span>
              </p>
              <p className="text-gray-700">
                Password: <span className="font-medium">{user.password}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCard;
