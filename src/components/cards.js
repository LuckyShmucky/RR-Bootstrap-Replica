import Card from 'react-bootstrap/Card'

export default function DisplayCard(){


    return (
            <div style={
                {
    backgroundRepeat: "no-repeat",
    position: "absolute",
    zIndex: "-1",
    height: "20%",
    width: "100%",
    backgroundPosition: "right center",
    backgroundImage: "url(https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg)",
    backgroundColor:"#deedd6",
    backgroundSize: "auto"
                }
            }>
            <h1 style={
                {
                    fontSize: "41px",
                    lineHeight: "52px",
                    fontWeight: "600",
                    color: "#343538",
                    margin: "0",
                    width: "578px"
                }
            }>Order Groceries for delivery or pickup today</h1>
            <p style={{margin: "16px 0 0 0", width: "578px"}}>Whatever you want from local stores, brought right to your door</p>
            </div>

    //     <Card className="bg-dark text-white">
    //     {/* <Card.Img style={{width: "100%", height: "15rem", objectFit: "cover", objectPosition: "50% %90"}} src="https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg" 
    //     alt="Card image" /> */}
    //     <Card.ImgOverlay>
    //       <Card.Title>Card title</Card.Title>
    //       <Card.Text>
    //        Order Groceries for delivery or pickup today
    //       </Card.Text>
    //       <Card.Text>Whatever you want from local stores, brought right to your door.</Card.Text>
    //     </Card.ImgOverlay>
    //   </Card>
    )
}