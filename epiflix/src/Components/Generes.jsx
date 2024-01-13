import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function generes() {
  return (
    <Container>
    <Row>
      <Col><div ClassName="d-flex">
          <h2 ClassName="mb-4">TV Shows</h2>
          <div ClassName="dropdown ml-4 mt-1">
            <button ClassName="btn btn-secondary btn-sm dropdown-toggle rounded-0" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="background-color: #221f1f">
              Genres &nbsp;
            </button>
            <div ClassName="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton">
              <a ClassName="dropdown-item text-white bg-dark" href="#">Comedy</a>
              <a ClassName="dropdown-item text-white bg-dark" href="#">Drama</a>
              <a ClassName="dropdown-item text-white bg-dark" href="#">Thriller</a>
            </div>
          </div>
        </div></Col>
      <Col>1 of 1</Col>
    </Row>
  </Container>
  );
}

export default generes;
    





   
   


