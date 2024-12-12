import { Button, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import News from '../types/News'

interface SAprops {
  art: News
}

const SingleArticle = (props: SAprops) => {
  const navigate = useNavigate()
  return (
    <Col xs={6} md={4} lg={3} className="mt-3">
      <Button
        onClick={() => {
          navigate('/details/' + props.art.id)
        }}
      >
        {props.art.title}
      </Button>
    </Col>
  )
}
export default SingleArticle
