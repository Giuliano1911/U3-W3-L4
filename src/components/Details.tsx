import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'

import Loading from './Loading'
import Error1 from './Error'
import News from '../types/News'

const Details = () => {
  const [detail, setDetail] = useState<News | null>(null)
  const [isError, setIsError] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const params = useParams()

  const getArticle = () => {
    fetch('https://api.spaceflightnewsapi.net/v4/articles/' + params.id)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('no ok')
        }
      })
      .then((data: News) => {
        console.log(data)
        setDetail(data)
        setIsLoading(false)
      })
      .catch((error) => {
        setIsError(true)
        console.log(error)
      })
  }

  useEffect(() => {
    getArticle()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container fluid>
      <Row>
        {isError && <Error1 />}
        {isLoading && <Loading />}
        {!isError && !isLoading && (
          <Col>
            <img className="img-fluid" src={detail!.image_url} />
            <p>{detail!.title}</p>
          </Col>
        )}
      </Row>
    </Container>
  )
}

export default Details
