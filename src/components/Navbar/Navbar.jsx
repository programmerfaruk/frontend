import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";
import noUser from "../../assets/noUser.jpg";
import Logo2 from "../../assets/logo.png"

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate()
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
    </>

    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log("successfull Logout", result)
                toast.success("Successfully Logout")
            })
            .catch(err => {
                toast.error(err)
            })

        navigate("/")
    }

    return (
        <div className="sticky z-10 top-0 bg-base-100 font-semibold">
            <div className="navbar   md:w-11/12  md:mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <Link to="/"><img className="md:w-20" src={Logo2} alt="Omexo" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user && <div className="hidden md:flex items-center gap-4 mr-4 text-blue-500"><img className="w-9 rounded-full" src={user.photoURL || noUser} alt="avater"
                        /> <p>{user.displayName || user.email}</p> </div>
                    }
                    {
                        user ? <button className="btn btn-error" onClick={handleLogOut}>LogOut</button>
                            : <Link to={`/login`} className="btn btn-primary">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;