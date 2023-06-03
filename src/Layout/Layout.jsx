import React from "react";
import Content from "./Content/Content.jsx";
import SidePanel from "./SidePanel/SidePanel.jsx";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Layout = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" className="flex">
                            <img
                                alt=""
                                src="/img/logo.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top mr-2"
                            />{' '}
                            <p className="text-sky-300 m-auto font-semibold">Pledge</p>
                            <p className="text-sky-500 m-auto font-semibold">Change</p>

                    </Navbar.Brand>
                </Container>
            </Navbar>
            <div className="flex flex-cols-12 w-full h-full bg-red-300">
                <SidePanel />
                <Content />
            </div>
        </div>
    );
}

export { Layout };