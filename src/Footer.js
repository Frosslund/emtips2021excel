import { useEffect, useState } from 'react';
 
const Footer = () => {

	const [offset, setOffset] = useState(0);

	useEffect(() => {
		window.onscroll = () => {
		setOffset(window.pageYOffset)
		}
	}, []);
	
    return (
		<header className={`navbar footer footer${offset !== 0 ? "__hidden" : "__visible"}`}>
				<span><i className="far fa-copyright"></i> Hemsidan skapad av Valen & Lulle</span>			
		</header>
    );
};

export default Footer;