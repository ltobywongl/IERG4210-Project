import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const dict = {
    "cate-pcnh": "Personal Care & Health",
    "cate-fnb": "Food & Beverages",
    "cate-h": "Houseware"
}
function Item({ item }) { //cate name img
    if (item !== null && item !== undefined && item !== [] && item[2] !== undefined) {
        return (
            <div className="page">
                <div className="hierarchicalNav">
                    <Link className="nav-link underline" to="/">Home</Link>
                    {">"}
                    <Link className="nav-link underline" to={"/" + item[0]}>{dict[item[0]]}</Link>
                    {">"}
                    <span className="nav-link underline">{item[1]}</span>
                </div>
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={item[2]} />
                            </Card>
                        </Col>
                        <Col>
                            <h3>{item[1]}</h3>
                            <p>In Stock</p>
                            <div className="price"><b>$10</b></div>
                            <div className="Row">
                                <input type="number" value={1} />
                                <Button className="ms-1" variant="warning">Add to cart</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div >
        )
    }

}

export default Item;