import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function Edit() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [userListData, setuserListData] = useState({
    name: "",

    place: "",
    salary: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((response) => {
        setuserListData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching hotel data:", error);
      });
  }, [id]);
  const handilclick = (e) => {
    e.preventDefault();

    navigate("/");

    
    axios
      .put(`http://localhost:3000/users/${id}`, userListData)
      .then((response) => {
        console.log(" data updated successfully:", response);
      })
      .catch((error) => {
        console.error("Error updating hotel data:", error);
      });
    alert("SAVE");

  };

  const handilchange = (e) => {
    const { name, value } = e.target;

    console.log(name,value,"name val");
    setuserListData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="main">
        <div className="list">
          <div className="listItem">
            <input
              placeholder="name"
              value={userListData.name}
              name="name"
              onChange={handilchange}
              type="text"
            />

            <input
              placeholder="place"
              value={userListData.place}
              name="place"
              onChange={handilchange}
              type="text"
            />
            <input
              placeholder="salary"
              value={userListData.salary}
              name="salary"
              onChange={handilchange}
              type="number"
            />
            <button onClick={handilclick}>ADD</button>
          </div>
        </div>
      </div>
    </>
  );
}
export { Edit };
