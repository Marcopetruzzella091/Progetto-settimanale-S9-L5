import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';



export default class CreateGallery extends Component {
  state = {
    Saga1: [],
    Saga2 :[],
    Saga3 :[]


  };


  componentDidMount = async () => {


    try {
      const response = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=7460c44f&s=harry%20potter");


      if (response.ok) {
        const data = await response.json();


        console.log(data.Search[0].Title)
        this.setState({ Saga1: data.Search })
          ;

      } else {

        console.log('error while fetching');
      }
    } catch (e) {

      console.log(e);
    }

    try {
      const response = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=7460c44f&s=dragon%20ball");


      if (response.ok) {
        const data = await response.json();


        console.log(data.Search[0].Title)
        this.setState({ Saga2: data.Search })
          ;

      } else {

        console.log('error while fetching');
      }
    } catch (e) {

      console.log(e);
    }

    try {
      const response = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=7460c44f&s=naruto");


      if (response.ok) {
        const data = await response.json();


        console.log(data.Search[0].Title)
        this.setState({ Saga3: data.Search })
          ;

      } else {

        console.log('error while fetching');
      }
    } catch (e) {

      console.log(e);
    }
  };





  render() {
    return (
      <>
      <div className='mt-5'>
        <h1>Harry Potter Saga</h1>
        <Row>
          {this.state.Saga1.map((e) => (<Col className='col-md-2 col-xs-4 mt-3'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={e.Poster} />

            </Card>

          </Col>))}

        </Row>
      </div><div className='mt-5'>
        <h1>Dragon ball Saga</h1>
        <Row>
          {this.state.Saga2.map((e) => (<Col className='col-md-2 col-xs-4 mt-3'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={e.Poster} />

            </Card>

          </Col>))}

        </Row>
      </div><div className='mt-5'>
        <h1>Naruto Saga</h1>
        <Row>
          {this.state.Saga3.map((e) => (<Col className='col-md-2 col-xs-4 mt-3'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={e.Poster} />

            </Card>

          </Col>))}

        </Row>
      </div>
      

      
      </>
    )
  }
}
