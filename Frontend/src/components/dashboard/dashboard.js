import { useState, useEffect } from "react";
import { Table, Container, Button } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/users");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Fetched users data:", data); // Log the fetched data to verify its structure
        setUsers(data);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleEdit = (id) => {
    console.log("Edit user with id:", id);
    if (id) {
      navigate(`/user/${id}`); // Only navigate if id is valid
    } else {
      console.error("Invalid user ID for navigation:", id);
    }
  };

  const handleDelete = async (id) => {
    console.log("Delete user with id:", id); // Debugging log
    if (!id) {
      console.error("Invalid user ID for deletion:", id);
      return;
    }
    try {
      const response = await fetch(`http://localhost:5000/api/users/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete user");
      }
      setUsers(users.filter((user) => user._id !== id)); // Update state
    } catch (error) {
      console.log("Error deleting user:", error);
    }
  };

  return (
    <Container className="my-4">
      <h1 className="text-center mb-4">Dashboard Components</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              {" "}
              {/* Verify that user._id is defined */}
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  className="me-2"
                  onClick={() => handleEdit(user._id)} // Ensure correct id is passed
                >
                  <FaEdit />
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(user._id)} // Ensure correct id is passed
                >
                  <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Dashboard;
