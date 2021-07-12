import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import './index.scss'
import { isMobile } from '../../utils'
import { dropDownList, mobileDropDownList } from './menuItems'


let menuList = (isMobile ? mobileDropDownList : dropDownList)

const Navbar = () => {
    return (
        <>
            <div className="d-flex justify-content-around  p-2 border-bottom navbar">
                <Link to='/' className="flex-grow-1 ml-5 bd-highlight title">Anubhav</Link>

                <div className="action-buttons">

                    <Link to='/write' className="mt-2 btn btn-primary font-weight-bold">Write Article</Link>
                    <Link to='/request' className="mt-2 btn btn-outline-primary">Request Article</Link>
                </div>
                <Dropdown className="navDropDown">
                    <Dropdown.Toggle size='lg' variant='white' id="dropdown-basic">
                        <i class={isMobile ? 'fa fa-bars' : 'fa fa-chevron-circle-down'} aria-hidden="true"></i> </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {menuList.map((item, index) =>
                            <Dropdown.Item key={index}>
                                <Link to={item.link}><i className={item.iconClass} aria-hidden="true"></i>{item.title}</Link>
                            </Dropdown.Item>
                        )
                        }
                       
                    </Dropdown.Menu>
                </Dropdown>


            </div>
        </>
    )
}

export default Navbar
