import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactMarkdown from "react-markdown";
import "./App.css";
import { Container, Row, Col } from "reactstrap";

const App = () => {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Container className="themed-container" fluid={true}>
      <Row>
        <Col>
          <textarea
            name="text-input"
            id=""
            placeholder="e.x # Heading"
            onChange={(e) => handleChange(e)}
          />
        </Col>
        <Col className="markdown-preview ">
          <ReactMarkdown source={value} escapeHtml={false}></ReactMarkdown>
        </Col>
      </Row>
    </Container>
  );
};
export default App;
