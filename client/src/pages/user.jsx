import React, { useEffect, useState } from 'react';

const base_url = import.meta.env.VITE_API;

const UserTable = ({}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        console.log('baseurl', base_url);
      fetch(base_url +'/users/')
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch(err => console.error('Error fetching users:', err));
    }, []);

    const [newUser, setNewUser] = useState({name:'vilas', email:'abc@mail.com', mobile:'8898'});
    const [showAddUserForm, setShowAddUserForm] = useState(false);

  const handleChange = (event) => {
    setNewUser({ ...newUser, [event.target.name]: event.target.value });
  };

  const handleCreateUser = async (newUser) => {
    try {
      const response = await fetch( base_url + '/users/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      });
  
      if (!response.ok) {
        console.error(response);
        alert(`Error creating user: ${response.statusText}`);
        return;
      }
  
      const createdUser = await response.json();
      setUsers(e=> [...e,createdUser] )
      // Update your users state and show success message
    } catch (error) {
      console.error('Error creating user:', error);
      alert(error?.message)
      // Handle errors for user feedback
    }
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    await handleCreateUser(newUser); // Call your actual user creation function
    // setNewUser({}); // Clear form after submission
    // setShowAddUserForm(false);
  };


    if(!users?.length)
    return "No users loaded";
  return (
    <div className='row' >
        <div className="col-6">
            <table className="table table-striped table-bordered table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                  <th scope="col">Gender</th>
                  {/* Add more columns as needed */}
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id}>
                    <th scope="row">{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>{user.gender}</td>
                    {/* Add more cells for other fields */}
                  </tr>
                ))}
              </tbody>
            </table>
             <button onClick={() => setShowAddUserForm(true)}>Add User</button>
        </div>

      <div className="col-6">
          {showAddUserForm && (
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={newUser.name || ''}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={newUser.email || ''}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">mobile:</label>
                <input
                  type="mobile"
                  name="mobile"
                  value={newUser.mobile || ''}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Add more input fields for other user details */}
              <button type="submit">Create User</button>
            </form>
          )}
      </div>
    </div>
  );
};

export default UserTable;
