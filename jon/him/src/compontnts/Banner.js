import { Col, Container, Row } from "react-bootstrap"

export const Banner = () => {
    return (
        <div>
            <section className ="banner" id ="home">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl={7}>
                            <span className="tagline">Welcome to my Portfolio</span>
                            <h1>{`Hi I'm webdecoded`}<span className="wrap">web developer</span></h1>
                            <p>I am full of shit, truly. I am an actual bum. </p>
                            <button onClick={()=> console.log('Clicked')}>Let's Connect</button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}