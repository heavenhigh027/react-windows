import React, { useState } from "react";
//import ReactDOM, { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,
        Container,
        Row,
        Card
        } from 'react-bootstrap';
import styled from 'styled-components';

function addCard(){
        return (
            <h2>This is Card!!</h2>
            )
        }
const HoverText = styled.p`
        color: #000;
        :hover {
            color: #ed1212;
            cursor: pointer;
        }
    `
const Input = () => {
    return <input placeholder="Your input here" />;
    };
const Dashboard = () => {
    const [inputList, setInputList] = useState([]);
    const onAddBtnClick = event => {
        setInputList(inputList.concat(<Input key={inputList.length} />));
        };
    return (
        <div>
            <div>
                <Container>            
    <Row className="row1st" variant="outline-success">1 of 3{addCard()}</Row>
                    <Row className="row2nd">2 of 3</Row>
                    <Row className="row3rd">3 of 3</Row>
                        <h2>Dashboard</h2>
                        <HoverText>Hover Here</HoverText>
                    <Button variant="outline-success">Dashboard</Button>
                    <Card></Card>
                </Container>

            </div>
            <button onClick={onAddBtnClick}>Add input</button>
            {inputList}
        </div>
        );
    }

export default Dashboard;   //render as ReactDOM