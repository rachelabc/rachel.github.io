import './NavBar.css';

const NavBar = () => {


    return (
        <nav>
            <div className="navbar-wrapper">
                <h1 className='navbar-title'> Jamz</h1>


                <ul className='navbar-container'>
                    <li><a href="#">Jams</a></li>
                    <li><a href="#">ID Cards</a></li>
                    <li><a href="#">Website Redesigns</a></li>
                    <li><a href="#">Personal Websites</a></li>
                    <li><a className="speicalblackbutton" href="#">Client Project</a></li>

                </ul>
            </div>
        </nav >
    )
};

export default NavBar;