import React, {useState, useEffect} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import {    Nav, 
            NavbarContainer, 
            NavLogo, 
            NavIcon, 
            Icons, 
            NavMenu, 
            NavItem, 
            NavLink,
            NavItemBtn,
            NavBtnLink } from './Navbar.elements';


const Navbar = () => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const showButton = () =>{
        if(window.innerWidth <=960){
            setButton(false)
        }
        else{
            setButton(true)
        }
    }

    useEffect(() =>{
        showButton();
    }, [])

    window.addEventListener('resize', showButton)

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}> {/*provide context for the icons*/}
                <Nav>
                    <NavbarContainer>
                        <NavLogo to='/'>
                            <NavIcon />
                            Portfolio
                        </NavLogo>
                        <Icons onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </Icons>
                    </NavbarContainer>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLink to='/'>
                                Home
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink to='/experience'>
                                Experience
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink to='/certification'>
                                Certification
                            </NavLink>
                        </NavItem>

                        <NavItemBtn>
                            {button ? (
                                <NavBtnLink to="/resume">
                                    <Button primary>Resume</Button>
                                </NavBtnLink>
                            ):(
                                <NavBtnLink to="/resume">
                                    <Button fontBig primary>
                                        Resume
                                    </Button>
                                </NavBtnLink>
                             )}
                        </NavItemBtn>
                    </NavMenu>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
