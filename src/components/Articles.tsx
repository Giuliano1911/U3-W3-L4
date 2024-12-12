import { Row } from 'react-bootstrap'

import SingleArticle from './SingleArticle'
import Aprops from '../types/NewsProps'

const Articles = (props: Aprops) => {
  return (
    <Row className=" justify-content-center">
      {props.art.map((a) => {
        return <SingleArticle art={a} key={a.id} />
      })}
    </Row>
  )
}
export default Articles
