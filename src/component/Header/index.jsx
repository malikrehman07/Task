import { Button, Space } from 'antd'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserOutlined } from '@ant-design/icons';
import { useAuthContext } from '../../context/Auth';

const Header = () => {
    const { isAuth, user } = useAuthContext()
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm">
                <div className="container">
                    <Link to='/' className="navbar-brand">Airbnb</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link to="/compaigns" className="nav-link active" aria-current="page">Compaign</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link active" aria-current="page">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link active" aria-current="page">Contact</Link>
                            </li> */}
                        </ul>
                        <div>
                            {!isAuth ?
                                <Link to="/auth/login">
                                    <UserOutlined style={{ fontSize: 22, color: "black" }} />
                                </Link> :
                                <Link to="/dashboard">
                                    <UserOutlined style={{ fontSize: 22, color: "black" }} />
                                </Link> }
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header