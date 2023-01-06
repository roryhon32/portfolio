import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function S3() {
  return (
    <div className='project'>
      <section className='projects' id='projects'>
    <Container>
      <div className='center'><h3>
        Projects
      </h3>
      <p>
        Projects that i worked
      </p></div>
      <div className='ProjectsLink'>
      <Row>
        <Col><a href='https://manoelf.netlify.app' target="_blank" rel='noreferrer'><div className='Project1'></div></a><p>Landing Page</p></Col>
        
        <Col><a href='https://reactcalculatorlg.netlify.app' target="_blank" rel='noreferrer'><div className='Project3'></div></a><p>React caculator</p></Col>
        <Col><a href='https://calcjslg.netlify.app' target="_blank" rel='noreferrer'><div className='Project4'></div></a><p>js calculator</p></Col>
      </Row>
      <Row>
      <Col><div className='Project2'></div><p>e-learning plataform</p></Col>
      </Row>
      </div>
    </Container>

      </section>

    </div>
  )
}

export default S3