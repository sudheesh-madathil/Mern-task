import { Home } from "./Home"
import "./Home.css"
import { Navbar } from "./Navbar"
import "./Navbar.css"
import { Route, Routes } from 'react-router-dom';
import { Employee } from "./Employee";
import "./Employee.css"
import { Edit } from "./Edit";
function App() {


  return (
    <>
        <Navbar/>
       
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Edit/:id" element={<Edit />} />
          <Route path="/Employee" element={<Employee/>} />
    </Routes>



    </>
  )
}

export default App
