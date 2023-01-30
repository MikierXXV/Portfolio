import React, {Component} from "react";

export default class Navbar extends Component {
    render() {
        return(
            <header className="s-header">
                <div className="row s-header__nav-wrap">
                    <nav className="s-header__nav">
                        <ul>
                            <li className="current">
                                <a className="smoothscroll" href="#Home">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#About">
                                    About
                                </a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#Resume">
                                    Resume
                                </a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#Skills">
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#Tecnologies">
                                    Tecnologies
                                </a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#Contact">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>{" "}
                {/* end row */}
                <a className="s-header__menu-toggle" href="#0" title="Menu">
                    <span className="s-header__menu-icon" />
                </a>
            </header>
        );
    }
}