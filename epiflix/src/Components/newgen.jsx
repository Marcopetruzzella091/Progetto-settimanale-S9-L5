
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FaThLarge } from "react-icons/fa";
import { MdDensitySmall } from "react-icons/md";



function ContainerExample() {
  return (
    <div className="container-fluid">
      <Row className='p-1'>

        <Col className=''><div class="d-flex justify-content-between">
          <div className="d-flex">
            <h2 className="mt-2 mb-2">TV Shows</h2>
            <DropdownButton className="d-flex align-items-center" id="dropdown-basic-button" title="Generes">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
           
          </div>
        </div></Col>
        <Col></Col>
        <Col className='d-flex justify-content-end align-items-center'><FaThLarge /><MdDensitySmall /></Col>
      </Row></div>
    
  );
}

export default ContainerExample;