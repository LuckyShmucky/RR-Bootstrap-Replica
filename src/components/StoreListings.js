import  Container  from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Image from "react-bootstrap/Image"




export default function StoreListings(){

    const style = {
        height: "auto",
        width: "auto",
        maxWidth: "100px",
        maxheight: "100px"
    }

    return(
    
            // <h2>Browse stores in Houston</h2>
<Container style={{ marginTop: "25rem", textAlign: "center" }}>
    <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
        <Row>
            <Col xs=".5" >
                <Image
                    style={style}
                src="https://corporate.aldi.us/fileadmin/fm-dam/logos/ALDI_2017.png" roundedCircle />
            </Col>
            <Col>
                <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                <p>Delivery * Pickup</p>
            </Col>
        </Row>
        <Col sm="1"></Col>
        <Row >
            <Col xs=".5">
                <Image style={style} src="https://www.sprouts.com/wp-content/uploads/2020/03/sprouts-logo.png" roundedCircle />
            </Col>
            <Col>
                <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                <p>Delivery * Pickup</p>
            </Col>
        </Row>
        <Col sm="1"></Col>
        <Row >
            <Col xs=".5" >
                <Image style={style} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR14GnTckaZFohK9bghfEulT_kUcg4NeDZgg&usqp=CAU" roundedCircle />
            </Col>
            <Col xs=".5">
                <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
                <p>Delivery</p>
            </Col>
        </Row>
    </Row>
</Container>
        
    )
}