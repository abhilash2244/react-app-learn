import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "../Dashboard.css";

export default function UseState() {
    const initialCount = 0;
    const [color, setColor] = useState("red");

    const [count, setCount] = useState(initialCount);
    const incrementbyFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount((prevCount) => prevCount + 1);
        }
    };

    const [car, setCar] = useState({
        car: "BMW",
        model: "X3"
    })
    const handleCar = () =>{
        setCar((prev)=>{
            return{
                ...prev,
                model: "X5"
            }
        })
    }

    return (
        <div>
            <Container>
                <div className="card">
                    <div className="container">
                        <h4>My favorite color is {color}!</h4>
                        <button
                            className="btn btn-primary"
                            type="button"
                            onClick={() => setColor("blue")}
                        >
                            Blue
                        </button>
                        <p>In React.js, the useState hook is used to add state to functional components. State allows you to manage component data that may change over time. Here's how you can use useState in a React functional component:</p>
                    </div>
                </div>

                <div className="card">
                    <div className="container">
                        <h4>Below is the code for useState hook</h4>
                        <pre>{`
                            const [color, setColor] = useState("red");

                            <div className="container">
                            <h4>My favorite color is {color}!</h4>
                            <button
                                className="btn btn-primary"
                                type="button"
                                onClick={() => setColor("blue")}
                            >
                                Blue
                            </button>
                            </div>
                            
                            `}</pre>
                    </div>
                </div>

                <div className="card">
                    <div className="container">
                        <h4>Count is {count}!</h4>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => setCount(initialCount)}
                        >
                            {" "}
                            Reset
                        </button>
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => setCount(count + 1)}
                        >
                            {" "}
                            Increment
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => setCount(count - 1)}
                        >
                            {" "}
                            Decrement
                        </button>
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={incrementbyFive}
                        >
                            {" "}
                            Increment by 5
                        </button>
                    </div>
                </div>
                <div className="card">
                    <div className="container">
                        <h4>Below is the code for prevState hook</h4>

                        <pre>{`
            const [ count, setCount] = useState(initialCount)
            const incrementbyFive =()=>{
              for(let i=0;i<5;i++){
                setCount(prevCount => prevCount + 1)
              }
            }

            <div className="card">
            <div className="container">
            <h4>Count  is {count}!</h4>
            <button type="button" className="btn btn-primary" onClick={()=> setCount(initialCount)}> Reset</button>
            <button type="button" className="btn btn-success" onClick={()=> setCount(count + 1)}> Increment</button>
            <button type="button" className="btn btn-danger" onClick={()=> setCount(count - 1)}> Decrement</button>
            <button type="button" className="btn btn-success" onClick={incrementbyFive}> Increment by 5</button>
            </div>
            </div>
          `}</pre>
                    </div>
                </div>

{/* this is use state with prev state for an object */}
                <div className="card">
                    <div className="container">
                        <h4>My favorite color is {car.car}! and model {car.model}</h4>
                        <button
                            className="btn btn-primary"
                            type="button"
                            onClick={handleCar}
                        >
                            Change model
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    );
}
