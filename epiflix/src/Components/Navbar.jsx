
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser, FaSearch } from "react-icons/fa";
import { PiBellSimpleFill } from "react-icons/pi";




function Navmenu() {
  return (
    <div className="container-fluid">
    <Navbar expand="lg" className="bg-dark text-light" >
      
      <Navbar.Brand href="#home"><img alt ="logo" src = "../../assets/logo.png" width ="100px" ></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-light">
            <Nav.Link href="#link" ></Nav.Link>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Tv Show</Nav.Link>
            <Nav.Link href="#link">Movies</Nav.Link>
            <Nav.Link href="#link">Recently added</Nav.Link>
            <Nav.Link href="#link">My list</Nav.Link>
          
          </Nav>
          <Nav>
            <Nav.Link href="#deets"><FaSearch /></Nav.Link>
            <Nav.Link href="#deets"><div id="kids" className=".text-white">KIDS</div></Nav.Link>
             <Nav.Link href="#deets"><PiBellSimpleFill /></Nav.Link>
            <Nav.Link href="#deets"><FaUser /></Nav.Link> 
            
            
          </Nav>
        </Navbar.Collapse>
      
    </Navbar></div>
  );
}

export default Navmenu;



