import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
// import bg from './img/bg.png';
import data from './data.js';

function App() {

  let [shoes] = useState(data);
  console.log(shoes);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* <div className='main-bg' style={{ backgroundImage : 'url(' + bg + ')'}}> */}
      <div className='main-bg'></div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <img src="https://yuunh.github.io/shop/shoes1.jpg" width="80%"/>
            <h4>{ shoes[0].title }</h4>
            <p>{ shoes[0].price }</p>
          </div>
          <div className='col-md-4'>
            <img src="https://yuunh.github.io/shop/shoes2.jpg" width="80%"/>
            <h4>{ shoes[1].title }</h4>
            <p>{ shoes[1].price }</p>
          </div>
          <div className='col-md-4'>
            <img src="https://yuunh.github.io/shop/shoes3.jpg" width="80%"/>
            <h4>{ shoes[2].title }</h4>
            <p>{ shoes[2].price }</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

/*
1. 오늘 만든 상품 목록 컴포넌트로 만들기
컴포넌트도 길면 다른 파일로 빼도 상관없음

2. 컴포넌트 3개 => 1개 => map 함수
난이도 어려움
*/
