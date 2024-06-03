import { NavLink } from 'react-router-dom';

const Navbar = () => {



    return (
		<header className="navbar">
			<NavLink to="/" className="navbar__logo">
				<span>EM-tips 2024</span>
			</NavLink>
			<nav>
				<ul className="navbar__links">
                    <li className="navbar__item">
						<NavLink to="/regler" className="navbar__link">
							Regler & Instruktioner
						</NavLink>
					</li>
					<li className="navbar__item">
						<NavLink to="/tips" className="navbar__link">
							Till tipset (Embed)
						</NavLink>
					</li>
                    <li className="navbar__item">
						<a rel="noreferrer" target="_blank" href="https://docs.google.com/spreadsheets/d/1BgP_mbAc7kn1rxV6_ROBbG-WOoVBX5hD5xfgFbqxQDU/edit?usp=sharing" className="navbar__link">
							Till tipset (Google)
						</a>
					</li>
					<li className="navbar__item">
						<NavLink to="/blogg" className="navbar__link">
							EM-bloggen
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
    );
};

export default Navbar;