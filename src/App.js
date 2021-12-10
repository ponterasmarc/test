import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import { Container, Col, Form, Row, FloatingLabel, Alert, Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';






function App() {
  let articles = [
    {
      id: 0,
      title: 'test',
      content: 'content',
      createdAt: ''
    }
  ]
 
  
  
  const AddScreen = () => {
    let id = 0
    const [title, setTitle] = useState() 
    const [content, setContent] = useState()
    const [newArticles, setNewArticles] = useState(articles)


    const [toEditTitle, setToEditTitle] = useState("")
    const [toEditContent, setToEditContemt] = useState("")
    
    
  
    const addArticle = (e) => {
      e.preventDefault()
      const date = new Date().toLocaleString() + ""

      articles = [...articles, {
        id: id,
        title,
        content,
        createdAt: date
      }]
  
      setNewArticles(articles)
  
      
  
    }
    
    console.log(newArticles)
  
    return (
      <>
        <div className="section-wrapper">
          <div className="form-wrapper">
            <h2>Add new article</h2>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Enter title" 
                onChange={(e)=>setTitle(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Content</Form.Label>
                <Form.Control 
                as="textarea" 
                rows={3}
                onChange={(e)=>setContent(e.target.value)}/>
              </Form.Group>
            </Form>
          </div>
          <Button variant="success" onClick={addArticle}>Save</Button>
        </div>
        
        <div className="section-wrapper">
          <div className="list-article">
            <h2>List of articles</h2>
            <Row>
              {newArticles.length > 0 ? (
                  newArticles.map((article, key) => (
                      <Col md={3}>
                          <Card style={{ width: '18rem' }}>
                            <Card.Body>
                              <Card.Title>{article.title}</Card.Title>
                              <Card.Text>{article.content}</Card.Text>
                              <div className="date">{article.createdAt ? article.createdAt : "N/A"}</div>
                              <Button variant="primary">Edit article</Button>
                            </Card.Body>
                          </Card>
                      </Col>
                  ))
              ):(
                <>No data</>
              )}
            </Row>
          </div>
        </div>

        <div className="section-wrapper">
          <div className="edit-article">
            <h2>Edit article</h2>
            {/* <Row>
              {newArticles.length > 0 ? (
                  newArticles.map((article, key) => (
                      <Col md={3}>
                          <Card style={{ width: '18rem' }}>
                            <Card.Body>
                              <Card.Title>{article.title}</Card.Title>
                              <Card.Text>{article.content}</Card.Text>
                              <div className="date">{article.createdAt ? article.createdAt : "N/A"}</div>
                              <Button variant="primary">Edit article</Button>
                            </Card.Body>
                          </Card>
                      </Col>
                  ))
              ):( 
                <>No data</>
              )}
            </Row> */}
          </div>
        </div>       
      </>
    )
  }


  return (
    <div className="App">
      <Container>
        <AddScreen />
      </Container>
    </div>
  );
}

export default App;
