import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from "react-router-dom";

function CateH({setItem}) {
    return (
        <div className="page">
            <div className="hierarchicalNav">
                <Link className="nav-link underline" to="/">Home</Link>
                {">"}
                <Link className="nav-link underline" to="/cate-h">Houseware</Link>
            </div>
            <h1><b>Houseware</b></h1>
            <h3>Product list</h3>
            <CardGroup>
                <Card>
                    <Link to="/cate-h/item" onClick={() => setItem(["cate-h", "Fan", require("./img/fan.jpg")])}>
                        <Card.Img variant="top" src={require("./img/fan.jpg")} />
                    </Link>
                    <Card.Body>
                        <Link className="nav-link" to="/cate-h/item" onClick={() => setItem(["cate-h", "Fan", require("./img/fan.jpg")])}>
                            <Card.Title>Fan</Card.Title>
                        </Link>
                        <Card.Text>
                            a steel fan.
                        </Card.Text>
                        <Card.Text className="price">
                            $20
                        </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Link to="/cate-h/item" onClick={() => setItem(["cate-h", "Fan", require("./img/fan.jpg")])}>
                        <Card.Img variant="top" src={require("./img/fan.jpg")} />
                    </Link>
                    <Card.Body>
                        <Link className="nav-link" to="/cate-h/item" onClick={() => setItem(["cate-h", "Fan", require("./img/fan.jpg")])}>
                            <Card.Title>Fan</Card.Title>
                        </Link>
                        <Card.Text>
                            a steel fan.
                        </Card.Text>
                        <Card.Text className="price">
                            $20
                        </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Link to="/cate-h/item" onClick={() => setItem(["cate-h", "Fan", require("./img/fan.jpg")])}>
                        <Card.Img variant="top" src={require("./img/fan.jpg")} />
                    </Link>
                    <Card.Body>
                        <Link className="nav-link" to="/cate-h/item" onClick={() => setItem(["cate-h", "Fan", require("./img/fan.jpg")])}>
                            <Card.Title>Fan</Card.Title>
                        </Link>
                        <Card.Text>
                            a steel fan.
                        </Card.Text>
                        <Card.Text className="price">
                            $20
                        </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Link to="/cate-h/item" onClick={() => setItem(["cate-h", "Fan", require("./img/fan.jpg")])}>
                        <Card.Img variant="top" src={require("./img/fan.jpg")} />
                    </Link>
                    <Card.Body>
                        <Link className="nav-link" to="/cate-h/item" onClick={() => setItem(["cate-h", "Fan", require("./img/fan.jpg")])}>
                            <Card.Title>Fan</Card.Title>
                        </Link>
                        <Card.Text>
                            a steel fan.
                        </Card.Text>
                        <Card.Text className="price">
                            $20
                        </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Link to="/cate-h/item" onClick={() => setItem(["cate-h", "Fan", require("./img/fan.jpg")])}>
                        <Card.Img variant="top" src={require("./img/fan.jpg")} />
                    </Link>
                    <Card.Body>
                        <Link className="nav-link" to="/cate-h/item" onClick={() => setItem(["cate-h", "Fan", require("./img/fan.jpg")])}>
                            <Card.Title>Fan</Card.Title>
                        </Link>
                        <Card.Text>
                            a steel fan.
                        </Card.Text>
                        <Card.Text className="price">
                            $20
                        </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
            </CardGroup>
            <CardGroup>
                <Card>
                    <Link to="/cate-h/item" onClick={() => setItem(["cate-h", "Fan", require("./img/fan.jpg")])}>
                        <Card.Img variant="top" src={require("./img/fan.jpg")} />
                    </Link>
                    <Card.Body>
                        <Link className="nav-link" to="/cate-h/item" onClick={() => setItem(["cate-h", "Fan", require("./img/fan.jpg")])}>
                            <Card.Title>Fan</Card.Title>
                        </Link>
                        <Card.Text>
                            a steel fan.
                        </Card.Text>
                        <Card.Text className="price">
                            $20
                        </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Link to="/cate-h/item" onClick={() => setItem(["cate-h", "Fan", require("./img/fan.jpg")])}>
                        <Card.Img variant="top" src={require("./img/fan.jpg")} />
                    </Link>
                    <Card.Body>
                        <Link className="nav-link" to="/cate-h/item" onClick={() => setItem(["cate-h", "Fan", require("./img/fan.jpg")])}>
                            <Card.Title>Fan</Card.Title>
                        </Link>
                        <Card.Text>
                            a steel fan.
                        </Card.Text>
                        <Card.Text className="price">
                            $20
                        </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Link to="/cate-h/item" onClick={() => setItem(["cate-h", "Fan", require("./img/fan.jpg")])}>
                        <Card.Img variant="top" src={require("./img/fan.jpg")} />
                    </Link>
                    <Card.Body>
                        <Link className="nav-link" to="/cate-h/item" onClick={() => setItem(["cate-h", "Fan", require("./img/fan.jpg")])}>
                            <Card.Title>Fan</Card.Title>
                        </Link>
                        <Card.Text>
                            a steel fan.
                        </Card.Text>
                        <Card.Text className="price">
                            $20
                        </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Link to="/cate-h/item" onClick={() => setItem(["cate-h", "Fan", require("./img/fan.jpg")])}>
                        <Card.Img variant="top" src={require("./img/fan.jpg")} />
                    </Link>
                    <Card.Body>
                        <Link className="nav-link" to="/cate-h/item" onClick={() => setItem(["cate-h", "Fan", require("./img/fan.jpg")])}>
                            <Card.Title>Fan</Card.Title>
                        </Link>
                        <Card.Text>
                            a steel fan.
                        </Card.Text>
                        <Card.Text className="price">
                            $20
                        </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Link to="/cate-h/item" onClick={() => setItem(["cate-h", "Fan", require("./img/fan.jpg")])}>
                        <Card.Img variant="top" src={require("./img/fan.jpg")} />
                    </Link>
                    <Card.Body>
                        <Link className="nav-link" to="/cate-h/item" onClick={() => setItem(["cate-h", "Fan", require("./img/fan.jpg")])}>
                            <Card.Title>Fan</Card.Title>
                        </Link>
                        <Card.Text>
                            a steel fan.
                        </Card.Text>
                        <Card.Text className="price">
                            $20
                        </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
            </CardGroup>
            <CardGroup>
                <Card>
                    <Link to="/cate-h/item" onClick={() => setItem(["cate-h", "Fan", require("./img/fan.jpg")])}>
                        <Card.Img variant="top" src={require("./img/fan.jpg")} />
                    </Link>
                    <Card.Body>
                        <Link className="nav-link" to="/cate-h/item" onClick={() => setItem(["cate-h", "Fan", require("./img/fan.jpg")])}>
                            <Card.Title>Fan</Card.Title>
                        </Link>
                        <Card.Text>
                            a steel fan.
                        </Card.Text>
                        <Card.Text className="price">
                            $20
                        </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Link to="/cate-h/item" onClick={() => setItem(["cate-h", "Fan", require("./img/fan.jpg")])}>
                        <Card.Img variant="top" src={require("./img/fan.jpg")} />
                    </Link>
                    <Card.Body>
                        <Link className="nav-link" to="/cate-h/item" onClick={() => setItem(["cate-h", "Fan", require("./img/fan.jpg")])}>
                            <Card.Title>Fan</Card.Title>
                        </Link>
                        <Card.Text>
                            a steel fan.
                        </Card.Text>
                        <Card.Text className="price">
                            $20
                        </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Link to="/cate-h/item" onClick={() => setItem(["cate-h", "Fan", require("./img/fan.jpg")])}>
                        <Card.Img variant="top" src={require("./img/fan.jpg")} />
                    </Link>
                    <Card.Body>
                        <Link className="nav-link" to="/cate-h/item" onClick={() => setItem(["cate-h", "Fan", require("./img/fan.jpg")])}>
                            <Card.Title>Fan</Card.Title>
                        </Link>
                        <Card.Text>
                            a steel fan.
                        </Card.Text>
                        <Card.Text className="price">
                            $20
                        </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Link to="/cate-h/item" onClick={() => setItem(["cate-h", "Fan", require("./img/fan.jpg")])}>
                        <Card.Img variant="top" src={require("./img/fan.jpg")} />
                    </Link>
                    <Card.Body>
                        <Link className="nav-link" to="/cate-h/item" onClick={() => setItem(["cate-h", "Fan", require("./img/fan.jpg")])}>
                            <Card.Title>Fan</Card.Title>
                        </Link>
                        <Card.Text>
                            a steel fan.
                        </Card.Text>
                        <Card.Text className="price">
                            $20
                        </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Link to="/cate-h/item" onClick={() => setItem(["cate-h", "Fan", require("./img/fan.jpg")])}>
                        <Card.Img variant="top" src={require("./img/fan.jpg")} />
                    </Link>
                    <Card.Body>
                        <Link className="nav-link" to="/cate-h/item" onClick={() => setItem(["cate-h", "Fan", require("./img/fan.jpg")])}>
                            <Card.Title>Fan</Card.Title>
                        </Link>
                        <Card.Text>
                            a steel fan.
                        </Card.Text>
                        <Card.Text className="price">
                            $20
                        </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div >
    )
}

export default CateH;