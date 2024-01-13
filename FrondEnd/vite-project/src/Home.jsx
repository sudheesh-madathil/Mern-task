import { useState } from "react"
import axios from "axios"
function Home(){
    const [name,setname] = useState()
    const [place,setplace] = useState()
    const [salary,setsalary] = useState()
  
const userdata={
    name:name,
    place:place,
    salary:salary
}

    const handilclick =()=>{
        if (!name || !place || !salary) {
            alert("Please fill in all fields");
            return;
          }



        axios.post("http://localhost:3000/users",userdata).then((responce)=>{
            console.log("data added",responce.data);
            alert("data added")
            setname("");
      setplace("");
      setsalary("");
        })


    }
    return(
        <>
        <div className="main">
            <div className="list">
               
           <div className="listItem">
     
            <input placeholder="name" value={name} onChange={(e)=>setname(e.target.value)} type="text" />
  
            <input placeholder="place" value={place} onChange={(e)=>setplace(e.target.value)} type="text" />
            <input placeholder="salary" value={salary} onChange={(e)=>setsalary(e.target.value)} type="number" />
            <button  onClick={handilclick} >ADD</button>
           </div>

         
            </div>
   
        </div>

        </>
    )
}export{Home}