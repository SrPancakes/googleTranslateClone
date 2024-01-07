import 'bootstrap/dist/css/bootstrap.min.css'
import { useStore } from './hooks/useStore'

import { Container, Row, Col, Button, Form, Stack } from 'react-bootstrap'
import { LanguageSelector } from './components/LanguageSelector'
import { TextArea } from './components/TextArea'
import { ArrowsIcon } from './components/Icons'

import { AUTO_LANGUAGE } from './constants'
import { SectionType } from './types.d'

import './App.css'


function App() {
  const {
    fromLanguage, setFromLanguage,
    toLanguage, setToLanguage,
    interchangeLanguages,
    fromText, setFromText,
    result, setResult,
    loading
  } = useStore()

  return (
    <Container fluid>
      <h2>Google Translate</h2>

      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.From}
              value={fromLanguage}
              onChange={setFromLanguage}
            />
            <TextArea
              type={SectionType.From}
              value={fromText}
              onChange={setFromText}
            />
          </Stack>
        </Col>

        <Col xs='auto'>
          <Button
            variant='link'
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={interchangeLanguages}
          >
            <ArrowsIcon />
          </Button>
        </Col>

        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.To}
              value={toLanguage}
              onChange={setToLanguage}
            />
            <TextArea
              loading={loading}
              type={SectionType.To}
              value={result}
              onChange={setResult}
            />
          </Stack>
        </Col>

      </Row>
    </Container>
  )
}

export default App
