import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode}`} style={{ backgroundColor: props.mode === 'light' ? '#FBFBFB' : 'purple' }}>
                <div className="container-fluid">
                    <a className="navbar-brand">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* <Link className="nav-link active" aria-current="page" to='/'>{props.Home}</Link> */}
                                <a className="nav-link active" aria-current="page" href='#'>{props.Home}</a>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link active" to="/about">{props.About}</Link>
                            </li> */}
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-primary" type="submit">Search</button>
                        </form>
                        <div className={`form-check form-switch mx-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'light' ? 'Enable Purple dark Mode' : 'Disable Purple dark Mode'}</label>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    Home: PropTypes.string,
    About: PropTypes.string,
}

Navbar.defaultProps = {
    title: "Title Here",
    Home: "Home Here",
    About: "About Here",
}