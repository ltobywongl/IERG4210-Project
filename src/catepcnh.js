import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from "react-router-dom";

function CatePCNH({ setItem }) {
    return (
        <div className="page">
            <div className="hierarchicalNav">
                <Link className="nav-link underline" to="/">Home</Link>
                {">"}
                <Link className="nav-link underline" to="/cate-pcnh">Personal Care & Health</Link>
            </div>
            <h1><b>Personal Care & Health</b></h1>
            <h3>Product list</h3>
            <CardGroup>
                <Card>
                    <Link to="/cate-pcnh/item" onClick={() => setItem(["cate-pcnh", "Mask", require("./img/mask.jpg")])}>
                        <Card.Img variant="top" src={require("./img/mask.jpg")} />
                    </Link>
                    <Card.Body>
                        <Link className="nav-link" to="/cate-pcnh/item" onClick={() => setItem(["cate-pcnh", "Mask", require("./img/mask.jpg")])}>
                            <Card.Title>Mask</Card.Title>
                        </Link>
                        <Card.Text>
                            {"Surgical mask. PFE + BFE + VFE > 99%"}
                        </Card.Text>
                        <Card.Text className="price">
                            $10
                        </Card.Text>
                        <Button variant="primary" >Add to Cart</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Link to="/cate-pcnh/item" onClick={() => setItem(["cate-pcnh", "Mask", require("./img/mask.jpg")])}>
                        <Card.Img variant="top" src={require("./img/mask.jpg")} />
                    </Link>
                    <Card.Body>
                        <Link className="nav-link" to="/cate-pcnh/item" onClick={() => setItem(["cate-pcnh", "Mask", require("./img/mask.jpg")])}>
                            <Card.Title>Mask</Card.Title>
                        </Link>
                        <Card.Text>
                            {"Surgical mask. PFE + BFE + VFE > 99%"}
                        </Card.Text>
                        <Card.Text className="price">
                            $10
                        </Card.Text>
                        <Button variant="primary" >Add to Cart</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Link to="/cate-pcnh/item" onClick={() => setItem(["cate-pcnh", "Mask", require("./img/mask.jpg")])}>
                        <Card.Img variant="top" src={require("./img/mask.jpg")} />
                    </Link>
                    <Card.Body>
                        <Link className="nav-link" to="/cate-pcnh/item" onClick={() => setItem(["cate-pcnh", "Mask", require("./img/mask.jpg")])}>
                            <Card.Title>Mask</Card.Title>
                        </Link>
                        <Card.Text>
                            {"Surgical mask. PFE + BFE + VFE > 99%"}
                        </Card.Text>
                        <Card.Text className="price">
                            $10
                        </Card.Text>
                        <Button variant="primary" >Add to Cart</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Link to="/cate-pcnh/item" onClick={() => setItem(["cate-pcnh", "Mask", require("./img/mask.jpg")])}>
                        <Card.Img variant="top" src={require("./img/mask.jpg")}/>
                    </Link>
                    <Card.Body>
                        <Link className="nav-link" to="/cate-pcnh/item" onClick={() => setItem(["cate-pcnh", "Mask", require("./img/mask.jpg")])}>
                            <Card.Title>Mask</Card.Title>
                        </Link>
                        <Card.Text>
                            {"Surgical mask. PFE + BFE + VFE > 99%"}
                        </Card.Text>
                        <Card.Text className="price">
                            $10
                        </Card.Text>
                        <Button variant="primary" >Add to Cart</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Link to="/cate-pcnh/item" onClick={() => setItem(["cate-pcnh", "Mask", require("./img/mask.jpg")])}>
                        <Card.Img variant="top" src={require("./img/mask.jpg")}/>
                    </Link>
                    <Card.Body>
                        <Link className="nav-link" to="/cate-pcnh/item" onClick={() => setItem(["cate-pcnh", "Mask", require("./img/mask.jpg")])}>
                            <Card.Title>Mask</Card.Title>
                        </Link>
                        <Card.Text>
                            {"Surgical mask. PFE + BFE + VFE > 99%"}
                        </Card.Text>
                        <Card.Text className="price">
                            $10
                        </Card.Text>
                        <Button variant="primary" >Add to Cart</Button>
                    </Card.Body>
                </Card>
            </CardGroup>
            
        </div >
    )
}

export default CatePCNH;