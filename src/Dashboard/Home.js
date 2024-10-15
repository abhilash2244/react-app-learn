import React from "react";
import Card from "react-bootstrap/Card";
export default function Home() {
  return (
    <div>
      <h2>Commands used for the applicaiton </h2>
      <Card>
        <Card.Body> npx create-react-app react-app</Card.Body>
      </Card><br></br>
      <Card>
        <Card.Body>npm install react-router-dom@6</Card.Body>
      </Card><br></br>
      <Card>
        <Card.Body>npm install @reduxjs/toolkit react-redux</Card.Body>
      </Card><br></br>
      <Card>
        <Card.Body>npm install axios</Card.Body>
      </Card><br></br>
      <Card>
        <Card.Body>npm install react-bootstrap bootstrap</Card.Body>
      </Card><br></br>
      <Card>
        <Card.Body>npm start</Card.Body>
      </Card>
      <br></br>
      <Card>
        <Card.Body>      <p>npm run build</p>

<p>npx serve -s build</p></Card.Body>
      </Card>

    </div>
  );
}
