import { Col, Row } from 'react-bootstrap'

const Welcome = () => {
  return (
    <Row className=" justify-content-center my-5">
      <Col xs={10} md={8} className=" text-center">
        <h1 className=" text-uppercase">Le migliori notizie dallo spazio</h1>
      </Col>
    </Row>
  )
}

export default Welcome
