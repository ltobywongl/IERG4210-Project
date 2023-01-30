import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from "react-router-dom";

function CateFNB({setItem}) {
    return (
        <div className="page">
            <div className="hierarchicalNav">
                <Link className="nav-link underline" to="/">Home</Link>
                {">"}
                <Link className="nav-link underline" to="/cate-fnb">Food & Beverages</Link>
            </div>
            <h1><b>Food & Beverages</b></h1>
            <h3>Product list</h3>
            <CardGroup>
                <Card>
                    <Link to="/cate-fnb/item" onClick={() => setItem(["cate-fnb", "Tomatoes", require("./img/tomatoes.jpg")])}>
                        <Card.Img variant="top" src={require("./img/tomatoes.jpg")} />
                    </Link>
                    <Card.Body>
                        <Link className="nav-link" to="/cate-fnb/item" onClick={() => setItem(["cate-fnb", "Tomatoes", require("./img/tomatoes.jpg")])}>
                            <Card.Title>Tomatoes</Card.Title>
                        </Link>
                        <Card.Text>
                            Fresh and juicy tomatoes.
                        </Card.Text>
                        <Card.Text className="price">
                            $10
                        </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Link to="/cate-fnb/item" onClick={() => setItem(["cate-fnb", "Tomatoes", require("./img/tomatoes.jpg")])}>
                        <Card.Img variant="top" src={require("./img/tomatoes.jpg")} />
                    </Link>
                    <Card.Body>
                        <Link className="nav-link" to="/cate-fnb/item" onClick={() => setItem(["cate-fnb", "Tomatoes", require("./img/tomatoes.jpg")])}>
                            <Card.Title>Tomatoes</Card.Title>
                        </Link>
                        <Card.Text>
                            Fresh and juicy tomatoes.
                        </Card.Text>
                        <Card.Text className="price">
                            $10
                        </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Link to="/cate-fnb/item" onClick={() => setItem(["cate-fnb", "Tomatoes", require("./img/tomatoes.jpg")])}>
                        <Card.Img variant="top" src={require("./img/tomatoes.jpg")} />
                    </Link>
                    <Card.Body>
                        <Link className="nav-link" to="/cate-fnb/item" onClick={() => setItem(["cate-fnb", "Tomatoes", require("./img/tomatoes.jpg")])}>
                            <Card.Title>Tomatoes</Card.Title>
                        </Link>
                        <Card.Text>
                            Fresh and juicy tomatoes.
                        </Card.Text>
                        <Card.Text className="price">
                            $10
                        </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Link to="/cate-fnb/item" onClick={() => setItem(["cate-fnb", "Tomatoes", require("./img/tomatoes.jpg")])}>
                        <Card.Img variant="top" src={require("./img/tomatoes.jpg")} />
                    </Link>
                    <Card.Body>
                        <Link className="nav-link" to="/cate-fnb/item" onClick={() => setItem(["cate-fnb", "Tomatoes", require("./img/tomatoes.jpg")])}>
                            <Card.Title>Tomatoes</Card.Title>
                        </Link>
                        <Card.Text>
                            Fresh and juicy tomatoes.
                        </Card.Text>
                        <Card.Text className="price">
                            $10
                        </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Link to="/cate-fnb/item" onClick={() => setItem(["cate-fnb", "Tomatoes", require("./img/tomatoes.jpg")])}>
                        <Card.Img variant="top" src={require("./img/tomatoes.jpg")} />
                    </Link>
                    <Card.Body>
                        <Link className="nav-link" to="/cate-fnb/item" onClick={() => setItem(["cate-fnb", "Tomatoes", require("./img/tomatoes.jpg")])}>
                            <Card.Title>Tomatoes</Card.Title>
                        </Link>
                        <Card.Text>
                            Fresh and juicy tomatoes.
                        </Card.Text>
                        <Card.Text className="price">
                            $10
                        </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
            </CardGroup>
            <CardGroup>
                <Card>
                    <Link to="/cate-fnb/item" onClick={() => setItem(["cate-fnb", "Oranges", require("./img/oranges.jpg")])}>
                        <Card.Img variant="top" src={require("./img/oranges.jpg")} />
                    </Link>
                    <Card.Body>
                        <Link className="nav-link" to="/cate-fnb/item" onClick={() => setItem(["cate-fnb", "Oranges", require("./img/oranges.jpg")])}>
                            <Card.Title>Oranges</Card.Title>
                        </Link>
                        <Card.Text>
                            Fresh and crispy oranges.
                        </Card.Text>
                        <Card.Text className="price">
                            $10
                        </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Link to="/cate-fnb/item" onClick={() => setItem(["cate-fnb", "Oranges", require("./img/oranges.jpg")])}>
                        <Card.Img variant="top" src={require("./img/oranges.jpg")} />
                    </Link>
                    <Card.Body>
                        <Link className="nav-link" to="/cate-fnb/item" onClick={() => setItem(["cate-fnb", "Oranges", require("./img/oranges.jpg")])}>
                            <Card.Title>Oranges</Card.Title>
                        </Link>
                        <Card.Text>
                            Fresh and crispy oranges.
                        </Card.Text>
                        <Card.Text className="price">
                            $10
                        </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Link to="/cate-fnb/item" onClick={() => setItem(["cate-fnb", "Oranges", require("./img/oranges.jpg")])}>
                        <Card.Img variant="top" src={require("./img/oranges.jpg")} />
                    </Link>
                    <Card.Body>
                        <Link className="nav-link" to="/cate-fnb/item" onClick={() => setItem(["cate-fnb", "Oranges", require("./img/oranges.jpg")])}>
                            <Card.Title>Oranges</Card.Title>
                        </Link>
                        <Card.Text>
                            Fresh and crispy oranges.
                        </Card.Text>
                        <Card.Text className="price">
                            $10
                        </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Link to="/cate-fnb/item" onClick={() => setItem(["cate-fnb", "Oranges", require("./img/oranges.jpg")])}>
                        <Card.Img variant="top" src={require("./img/oranges.jpg")} />
                    </Link>
                    <Card.Body>
                        <Link className="nav-link" to="/cate-fnb/item" onClick={() => setItem(["cate-fnb", "Oranges", require("./img/oranges.jpg")])}>
                            <Card.Title>Oranges</Card.Title>
                        </Link>
                        <Card.Text>
                            Fresh and crispy oranges.
                        </Card.Text>
                        <Card.Text className="price">
                            $10
                        </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Link to="/cate-fnb/item" onClick={() => setItem(["cate-fnb", "Oranges", require("./img/oranges.jpg")])}>
                        <Card.Img variant="top" src={require("./img/oranges.jpg")} />
                    </Link>
                    <Card.Body>
                        <Link className="nav-link" to="/cate-fnb/item" onClick={() => setItem(["cate-fnb", "Oranges", require("./img/oranges.jpg")])}>
                            <Card.Title>Oranges</Card.Title>
                        </Link>
                        <Card.Text>
                            Fresh and crispy oranges.
                        </Card.Text>
                        <Card.Text className="price">
                            $10
                        </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
            </CardGroup>
            <CardGroup>
                <Card>
                    <Link to="/cate-fnb/item" onClick={() => setItem(["cate-fnb", "Strawberries", require("./img/strawberries.jpg")])}>
                        <Card.Img variant="top" src={require("./img/strawberries.jpg")} />
                    </Link>
                    <Card.Body>
                        <Link className="nav-link" to="/cate-fnb/item" onClick={() => setItem(["cate-fnb", "Strawberries", require("./img/strawberries.jpg")])}>
                            <Card.Title>Strawberries</Card.Title>
                        </Link>
                        <Card.Text>
                            Fresh and crispy strawberries.
                        </Card.Text>
                        <Card.Text className="price">
                            $10
                        </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Link to="/cate-fnb/item" onClick={() => setItem(["cate-fnb", "Strawberries", require("./img/strawberries.jpg")])}>
                        <Card.Img variant="top" src={require("./img/strawberries.jpg")} />
                    </Link>
                    <Card.Body>
                        <Link className="nav-link" to="/cate-fnb/item" onClick={() => setItem(["cate-fnb", "Strawberries", require("./img/strawberries.jpg")])}>
                            <Card.Title>Strawberries</Card.Title>
                        </Link>
                        <Card.Text>
                            Fresh and crispy strawberries.
                        </Card.Text>
                        <Card.Text className="price">
                            $10
                        </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Link to="/cate-fnb/item" onClick={() => setItem(["cate-fnb", "Strawberries", require("./img/strawberries.jpg")])}>
                        <Card.Img variant="top" src={require("./img/strawberries.jpg")} />
                    </Link>
                    <Card.Body>
                        <Link className="nav-link" to="/cate-fnb/item" onClick={() => setItem(["cate-fnb", "Strawberries", require("./img/strawberries.jpg")])}>
                            <Card.Title>Strawberries</Card.Title>
                        </Link>
                        <Card.Text>
                            Fresh and crispy strawberries.
                        </Card.Text>
                        <Card.Text className="price">
                            $10
                        </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Link to="/cate-fnb/item" onClick={() => setItem(["cate-fnb", "Strawberries", require("./img/strawberries.jpg")])}>
                        <Card.Img variant="top" src={require("./img/strawberries.jpg")} />
                    </Link>
                    <Card.Body>
                        <Link className="nav-link" to="/cate-fnb/item" onClick={() => setItem(["cate-fnb", "Strawberries", require("./img/strawberries.jpg")])}>
                            <Card.Title>Strawberries</Card.Title>
                        </Link>
                        <Card.Text>
                            Fresh and crispy strawberries.
                        </Card.Text>
                        <Card.Text className="price">
                            $10
                        </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Link to="/cate-fnb/item" onClick={() => setItem(["cate-fnb", "Strawberries", require("./img/strawberries.jpg")])}>
                        <Card.Img variant="top" src={require("./img/strawberries.jpg")} />
                    </Link>
                    <Card.Body>
                        <Link className="nav-link" to="/cate-fnb/item" onClick={() => setItem(["cate-fnb", "Strawberries", require("./img/strawberries.jpg")])}>
                            <Card.Title>Strawberries</Card.Title>
                        </Link>
                        <Card.Text>
                            Fresh and crispy strawberries.
                        </Card.Text>
                        <Card.Text className="price">
                            $10
                        </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
            </CardGroup>


        </div >
    )
}

export default CateFNB;