
import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to="" >
                <img src="./logo2.png" alt="bug" height={50} />
                </NavLink>
                    <NavLink to="/about" >
                        About Me
                    </NavLink>
                    <NavLink to="/projects" activeStyle>
                        Projects
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;