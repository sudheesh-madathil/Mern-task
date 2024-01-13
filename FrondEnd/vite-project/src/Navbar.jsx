import { Link } from "react-router-dom"
// import { useNavigate } from "react-router-dom"
function Navbar(){
//  const nav = useNavigate()
// const handilclick = ()=>{
// nav("./Employee")
// }
    return(
        <>

    <div className="Navmain">
        <div className="Navlist">
            <div className="NavlistItems">
                <ul>
                    <li> <Link style={{ textDecoration: 'none' }} to="/">Home</Link></li>
                    <li> <Link style={{ textDecoration: 'none' }} to="/Employee">Employee</Link></li>
                   
                    {/* <li onClick={handilclick}
                    >Employee</li> */}
                  
                </ul>
                
            </div>
        </div>
    </div>
        </>
    )
 }export{Navbar}