import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from "react-bootstrap/Carousel";
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from "react-router-dom";

function Home({setItem}) {
    return (
        <div className="page">
            <div className="hierarchicalNav">
                <Link className="nav-link underline" to="/">Home</Link>
            </div>

            <h1><b>Welcome to the site!</b></h1>
            <h3>Featured</h3>
            <Carousel indicators={false} interval={3000} variant="dark">
                <Carousel.Item>
                    <CardGroup>
                        <Card>
                            <Link to="cate-fnb/item" onClick={() => setItem(["cate-fnb", "Apple", require("./img/apple.jpg")])}>
                                <Card.Img variant="top" src={require("./img/apple.jpg")} />
                            </Link>
                            <Card.Body>
                                <Link className="nav-link" to="cate-fnb/item" onClick={() => setItem(["cate-fnb", "Apple", require("./img/apple.jpg")])}>
                                    <Card.Title>Apple</Card.Title>
                                </Link>
                                <Card.Text>
                                    Fresh and crispy apple.
                                </Card.Text>
                                <Card.Text className="price">
                                    $10
                                </Card.Text>
                                <Button variant="primary">Add to Cart</Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Link to="cate-fnb/item" onClick={() => setItem(["cate-fnb", "Apple", require("./img/apple.jpg")])}>
                                <Card.Img variant="top" src={require("./img/apple.jpg")} />
                            </Link>
                            <Card.Body>
                                <Link className="nav-link" to="cate-fnb/item" onClick={() => setItem(["cate-fnb", "Apple", require("./img/apple.jpg")])}>
                                    <Card.Title>Apple</Card.Title>
                                </Link>
                                <Card.Text>
                                    Fresh and juicy apple.
                                </Card.Text>
                                <Card.Text className="price">
                                    $10
                                </Card.Text>
                                <Button variant="primary">Add to Cart</Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Link to="cate-fnb/item" onClick={() => setItem(["cate-fnb", "Apple", require("./img/apple.jpg")])}>
                                <Card.Img variant="top" src={require("./img/apple.jpg")} />
                            </Link>
                            <Card.Body>
                                <Link className="nav-link" to="cate-fnb/item" onClick={() => setItem(["cate-fnb", "Apple", require("./img/apple.jpg")])}>
                                    <Card.Title>Apple</Card.Title>
                                </Link>
                                <Card.Text>
                                    Fresh and yummy apple.
                                </Card.Text>
                                <Card.Text className="price">
                                    $10
                                </Card.Text>
                                <Button variant="primary">Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Carousel.Item>
                <Carousel.Item>
                    <CardGroup>
                        <Card>
                            <Link to="cate-fnb/item" onClick={() => setItem(["cate-fnb", "Oranges", require("./img/oranges.jpg")])}>
                                <Card.Img variant="top" src={require("./img/oranges.jpg")} />
                            </Link>
                            <Card.Body>
                                <Link className="nav-link" to="cate-fnb/item" onClick={() => setItem(["cate-fnb", "Oranges", require("./img/oranges.jpg")])}>
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
                            <Link to="cate-fnb/item" onClick={() => setItem(["cate-fnb", "Oranges", require("./img/oranges.jpg")])}>
                                <Card.Img variant="top" src={require("./img/oranges.jpg")} />
                            </Link>
                            <Card.Body>
                                <Link className="nav-link" to="cate-fnb/item" onClick={() => setItem(["cate-fnb", "Oranges", require("./img/oranges.jpg")])}>
                                    <Card.Title>Oranges</Card.Title>
                                </Link>
                                <Card.Text>
                                    Fresh and juicy oranges.
                                </Card.Text>
                                <Card.Text className="price">
                                    $10
                                </Card.Text>
                                <Button variant="primary">Add to Cart</Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Link to="cate-fnb/item" onClick={() => setItem(["cate-fnb", "Oranges", require("./img/oranges.jpg")])}>
                                <Card.Img variant="top" src={require("./img/oranges.jpg")} />
                            </Link>
                            <Card.Body>
                                <Link className="nav-link" to="cate-fnb/item" onClick={() => setItem(["cate-fnb", "Oranges", require("./img/oranges.jpg")])}>
                                    <Card.Title>Oranges</Card.Title>
                                </Link>
                                <Card.Text>
                                    Fresh and juicy oranges.
                                </Card.Text>
                                <Card.Text className="price">
                                    $10
                                </Card.Text>
                                <Button variant="primary">Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Carousel.Item>
                <Carousel.Item>
                    <CardGroup>
                        <Card>
                            <Link to="cate-fnb/item" onClick={() => setItem(["cate-fnb", "Strawberries", require("./img/strawberries.jpg")])}>
                                <Card.Img variant="top" src={require("./img/strawberries.jpg")} />
                            </Link>
                            <Card.Body>
                                <Link className="nav-link" to="cate-fnb/item" onClick={() => setItem(["cate-fnb", "Strawberries", require("./img/strawberries.jpg")])}>
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
                            <Link to="cate-fnb/item" onClick={() => setItem(["cate-fnb", "Strawberries", require("./img/strawberries.jpg")])}>
                                <Card.Img variant="top" src={require("./img/strawberries.jpg")} />
                            </Link>
                            <Card.Body>
                                <Link className="nav-link" to="cate-fnb/item" onClick={() => setItem(["cate-fnb", "Strawberries", require("./img/strawberries.jpg")])}>
                                    <Card.Title>Strawberries</Card.Title>
                                </Link>
                                <Card.Text>
                                    Fresh and juicy strawberries.
                                </Card.Text>
                                <Card.Text className="price">
                                    $10
                                </Card.Text>
                                <Button variant="primary">Add to Cart</Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Link to="cate-fnb/item" onClick={() => setItem(["cate-fnb", "Strawberries", require("./img/strawberries.jpg")])}>
                                <Card.Img variant="top" src={require("./img/strawberries.jpg")} />
                            </Link>
                            <Card.Body>
                                <Link className="nav-link" to="cate-fnb/item" onClick={() => setItem(["cate-fnb", "Strawberries", require("./img/strawberries.jpg")])}>
                                    <Card.Title>Strawberries</Card.Title>
                                </Link>
                                <Card.Text>
                                    Fresh and juicy strawberries.
                                </Card.Text>
                                <Card.Text className="price">
                                    $10
                                </Card.Text>
                                <Button variant="primary">Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Carousel.Item>
            </Carousel>


        </div >
    )
}

export default Home;