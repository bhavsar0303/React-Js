import React from 'react'
import {Link,NavLink} from 'react-router-dom'

function Header() {
    return (
        <div>
            {/* Topbar Start */}
            <div className="container-fluid bg-dark">
                <div className="row py-2 px-lg-5">
                    <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                        <div className="d-inline-flex align-items-center text-white">
                            <small><i className="fa fa-phone-alt mr-2" />+012 345 6789</small>
                            <small className="px-3">|</small>
                            <small><i className="fa fa-envelope mr-2" />info@example.com</small>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center text-lg-right">
                        <div className="d-inline-flex align-items-center">
                            <a className="text-white px-2" href>
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a className="text-white px-2" href>
                                <i className="fab fa-twitter" />
                            </a>
                            <a className="text-white px-2" href>
                                <i className="fab fa-linkedin-in" />
                            </a>
                            <a className="text-white px-2" href>
                                <i className="fab fa-instagram" />
                            </a>
                            <a className="text-white pl-2" href>
                                <i className="fab fa-youtube" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Topbar End */}
            {/* Navbar Start */}
            <div className="container-fluid p-0">
                <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
                    <NavLink to="/" className="navbar-brand ml-lg-3">
                        <h1 className="m-0 text-uppercase text-primary"><i className="fa fa-book-reader mr-3" />Edukate</h1>
                    </NavLink>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
                        <div className="navbar-nav mx-auto py-0">
                            <NavLink to="/" className="nav-item nav-link active">Home</NavLink>
                            <NavLink to="about" className="nav-item nav-link">About</NavLink>
                            <NavLink to="courses" className="nav-item nav-link">Courses</NavLink>
                            <div className="nav-item dropdown">
                                <NavLink to="/" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</NavLink>
                                <div className="dropdown-menu m-0">
                                    <NavLink to="detail" className="dropdown-item">Course Detail</NavLink>
                                    <NavLink to="feature" className="dropdown-item">Our Features</NavLink>
                                    <NavLink to="taem" className="dropdown-item">Instructors</NavLink>
                                    <NavLink to="testimonial" className="dropdown-item">Testimonial</NavLink>
                                </div>
                            </div>
                            <NavLink to="contact" className="nav-item nav-link">Contact</NavLink>
                        </div>
                        <NavLink to="Singup" className="btn btn-primary py-2 px-4 d-none d-lg-block">Singup</NavLink>
                    </div>
                </nav>
            </div>
            {/* Navbar End */}
            {/* Header Start */}
            <div className="jumbotron jumbotron-fluid position-relative overlay-bottom" style={{ marginBottom: 90 }}>
                <div className="container text-center my-5 py-5">
                    <h1 className="text-white mt-4 mb-4">Learn From Home</h1>
                    <h1 className="text-white display-1 mb-5">Education Courses</h1>
                    <div className="mx-auto mb-5" style={{ width: '100%', maxWidth: 600 }}>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <button className="btn btn-outline-light bg-white text-body px-4 dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Courses</button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Courses 1</a>
                                    <a className="dropdown-item" href="#">Courses 2</a>
                                    <a className="dropdown-item" href="#">Courses 3</a>
                                </div>
                            </div>
                            <input type="text" className="form-control border-light" style={{ padding: '30px 25px' }} placeholder="Keyword" />
                            <div className="input-group-append">
                                <button className="btn btn-secondary px-4 px-lg-5">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Header End */}
        </div>

    )
}

export default Header