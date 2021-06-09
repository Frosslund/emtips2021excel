import { NavLink } from 'react-router-dom';

const Navbar = () => {



    return (
		<header className="navbar">
			<NavLink to="/" className="navbar__logo">
				<span>EM-tips 2021</span>
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
						<a rel="noreferrer" target="_blank" href="https://docs.google.com/spreadsheets/d/1yAKozFLtn03rTj9ByB0aulmebP0_U1TAsGz538zAY0w/edit#gid=1817944953" className="navbar__link">
							Till tipset (Google)
						</a>
					</li>
					<li className="navbar__item">
						<NavLink to="/blogg" className="navbar__link">
							Lukas EM-blogg
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
    );
};

export default Navbar;