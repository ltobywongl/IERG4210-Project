import React, {useState} from "react";
import { Routes, Route, Outlet } from 'react-router-dom';
import logo from "./logo.svg";
import Home from './home';
import About from './about';
import CateFNB from './catefnb';
import CatePCNH from './catepcnh';
import CateH from './cateh';
import Item from './item';

const NestedRoute = () => {
    return (
        <Outlet />
    );
};

const NotFound = () => {
    return (
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    );
}

function Main() {
    const [item, setItem] = useState([]);
    return (
        <Routes>
            <Route path='/' element={<Home setItem={setItem} />}></Route>
            <Route path={'about'} element={<About />} />
            <Route path={'cate-fnb'} element={<NestedRoute />}>
                <Route index element={<CateFNB setItem={setItem} />} />
                <Route path={'item'} element={<Item item={item} />} />
                <Route path='*' element={<NotFound />} />
            </Route>
            <Route path={'cate-pcnh'} element={<NestedRoute />}>
                <Route index element={<CatePCNH setItem={setItem} />} />
                <Route path={'item'} element={<Item item={item} />} />
                <Route path='*' element={<NotFound />} />
            </Route>
            <Route path={'cate-h'} element={<NestedRoute />}>
                <Route index element={<CateH setItem={setItem} />} />
                <Route path={'item'} element={<Item item={item} />} />
                <Route path='*' element={<NotFound />} />
            </Route>
            <Route path='*' element={
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
            }></Route>
        </Routes >
    )
}

export default Main;