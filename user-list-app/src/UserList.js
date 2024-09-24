import React, { useState, useEffect } from 'react';
import axios from 'axios';


function UserList() {
    const [listOfUsers, setListOfUsers] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/users');
          setListOfUsers(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div>
        {/* Render the list of users here */}
      </div>
    );
  }

  return (
    <div>
      {listOfUsers.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );