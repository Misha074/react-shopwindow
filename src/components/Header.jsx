import React from "react";

function Header() {
    return (
        <nav className="indigo accent-2">
            <div className="nav-wrapper">
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="brand-logo">React shopwindow</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                        <a href="!#">Repo</a>
                    </li>
                    <li>
                        <a href="!#">Link1</a>
                    </li>
                    <li>
                        <a href="!#">Link2</a>
                    </li>
                    <li>
                        <a href="!#">Link3</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export {Header}