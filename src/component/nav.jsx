import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <div className="flex justify-between">
            <div>
                Tech/codingPoint
            </div>
            <div>
                <ul className="md:flex hidden gap-4">
                    <li>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/courses">
                            Courses
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/getintouch">
                            Get in touch
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/aboutus">
                            About us
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Nav