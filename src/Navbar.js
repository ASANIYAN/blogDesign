import { Link } from 'react-router-dom';

const Navbar = () => {


    const body = document.body;

    const showBar = (e) => {
        const navHidden = document.querySelector('.nav-hidden');
        navHidden.style.transform =  'translateX(0px)';
        body.style.overflow = 'none';
    }

    const closeBar = (e) => {
        const navHidden = document.querySelector('.nav-hidden');
        navHidden.style.transform =  'translateX(-2500px)';
        body.style.overflow = 'auto';
    }

    return (

        <div>
            <nav className="nav-mobile">
                <div className="container-fluid">
                    <div className="nav-mobile-content-hold">
                        <div className="logo-mobile-hold mt-2">
                            <img alt="logo" className="logo-mobile navbar-brand" src="https://www.dwinawan.com/blog/logoorange.png" />
                        </div>
                        <div className="bars-hold mt-4">
                            <i onClick={(e) => { showBar(e) }} className="fas fa-bars bars"></i>
                        </div>
                    </div>

                    <div className="nav-hidden">
                        <div className="nav-mobile-content-hold">
                            <div className="logo-hidden-mobile-hold mt-2 ms-2">
                                <img alt="logo" className="logo-hidden-mobile navbar-brand" src="https://www.dwinawan.com/blog/logoorange.png" />
                            </div>
                            <div className="close-hold mt-4 me-3">
                            <i onClick={(e) => { closeBar(e) }} className="fas fa-times close"></i>
                            </div>
                        </div>
                        <div className="nav-hidden-texts mt-4">
                            <Link>Home</Link>
                            <Link>Challenge</Link>
                            <Link>Learn Design</Link>
                            <Link className="active-mobile">Blog</Link>
                            <Link>Playlist</Link>
                            <Link>Bookmarks</Link>
                            <Link>FAQ</Link>
                            <Link>Elements</Link>
                        </div>
                    </div>

                </div>
            </nav>

            <nav className="nav mt-3">
                <div className="container-fluid">
                    <div className="nav-content-hold d-flex justify-content-between">
                        <div className="logo-hold">
                            <img alt="logo" className="logo-hidden-mobile navbar-brand" src="https://www.dwinawan.com/blog/logoorange.png" />
                        </div>
                        <div className="nav-texts d-flex mt-3">
                            <Link>Home</Link>
                            <Link>Challenge</Link>
                            <Link>Learn Design</Link>
                            <Link className="active">Blog</Link>
                            <Link>Playlist</Link>
                            <Link>Bookmarks</Link>
                            <Link>FAQ</Link>
                            <Link>Elements</Link>
                        </div>
                    </div>
                </div>

            </nav>

        </div>
      );
}

export default Navbar;