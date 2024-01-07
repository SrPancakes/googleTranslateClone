import 'bootstrap/dist/css/bootstrap.min.css'
import { useStore } from './hooks/useStore'

import { Container, Row, Col, Button } from 'react-bootstrap'
import { LanguageSelector } from './components/LanguageSelector'
import { ArrowsIcon } from './components/icons'


import './App.css'
import { AUTO_LANGUAGE } from './constants'


function App() {
  const {
    fromLanguage, setFromLanguage,
    toLanguage, setToLanguage,
    interchangeLanguages
  } = useStore()

  return (
    <Container fluid>
      <h1>Google Translate</h1>

      <Row>
        <Col>
          <LanguageSelector
            type='from'
            value={fromLanguage}
            onChange={setFromLanguage}
          />
          {fromLanguage}
        </Col>

        <Col>
          <Button
            variant='link'
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={interchangeLanguages}
          >
            <ArrowsIcon />
          </Button>
        </Col>

        <Col>
          <LanguageSelector
            type='to'
            value={toLanguage}
            onChange={setToLanguage}
          />
          {toLanguage}
        </Col>

      </Row>
    </Container>
  )
}

export default App
