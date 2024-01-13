import axios from "axios";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Employee() {
  const navigate = useNavigate();

  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((userlist) => {
        setEmployeeData(userlist.data);
      })
      .catch((error) => {
        console.error("Error fetching employee data:", error);
      });
  }, []);

  const clickdelete = (_id) => {
    console.log("Deleting employee with ID:", _id);
    axios
      .delete(`http://localhost:3000/users/${_id}`)
      .then(() => {
        setEmployeeData((prevData) =>
          prevData.filter((employee) => employee._id !== _id)
        );
      })
      .catch((error) => {
        console.error("Error deleting employee:", error);
      });
  };

  const Add = (id) => {
    navigate(`/Edit/${id}`);
  };

  return (
    <>
      <div className="header">
        <div className="employeeList">
          {employeeData.map((employee) => (
            <div key={employee.id} className="employeeCard">
              <p> name: {employee.name}</p>
              <p>Place: {employee.place}</p>
              <p>Salary: {employee.salary}</p>
              <button className="delete" onClick={() => clickdelete(employee._id)}>delete</button>
              <button className="edit" onClick={() => Add(employee._id)}>Edit</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export { Employee };
