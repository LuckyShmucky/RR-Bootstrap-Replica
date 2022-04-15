import Nav  from "react-bootstrap/Nav"
import Button from 'react-bootstrap/Button'
import { Navbar } from "react-bootstrap"
import {BrowserRouter as Router, Link, Routes, Route} from "react-router-dom"



import DisplayCard from './cards';
import StoreListings from './StoreListings';


export default function DisplayNav(){

   
git 
    return(

<Router>

<Navbar bg="light" expand="lg" >
    <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home">
        <img src="https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg" /> 
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"> 
        </Nav>
        <Nav >
           
           <Nav.Item>
            <Nav.Link eventKey={"image"}>
                <Link to='/image'>image</Link>
            </Nav.Link>

           </Nav.Item>
            <Nav.Link eventKey={"listings"}>
                <Link to='/listings'></Link>
            </Nav.Link>
          
            <Button variant="success"  >Sign Up</Button>{' '}
           
        </Nav>
    </Navbar.Collapse>
</Navbar>

<div className="display">
    <Routes>
    <Route path="/image" component={DisplayCard} />
    <Route path="/listings" component={StoreListings}/>
    </Routes>
</div>

</Router>



   

        )
}