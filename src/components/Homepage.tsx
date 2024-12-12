import { Container } from 'react-bootstrap'

import Welcome from './Welcome'
import Articles from './Articles'
import Aprops from '../types/NewsProps'
import Loading from './Loading'
import Error from './Error'

interface HProps extends Aprops {
  loading: boolean
  error: boolean
}

const Homepage = (props: HProps) => {
  return (
    <Container fluid>
      <Welcome />
      {props.error && <Error />}
      {props.loading && <Loading />}
      {!props.error && !props.loading && <Articles art={props.art} />}
    </Container>
  )
}

export default Homepage
