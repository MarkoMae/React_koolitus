import { Link } from "react-router-dom";

function Menyy () {
    return (<div className="navbar">
    <Link to="/">
    <button className="main-button">Mine Avalehele</button>
    </Link>

    <Link to="/Ostukorv">
      <button className="main-button">Mine Ostukorvi</button>
    </Link>
  
     <Link to="/Admin">
      <button classnName="main-button">Mine Administraatori lehele</button>
     </Link>
  </div>)
}

export default Menyy;