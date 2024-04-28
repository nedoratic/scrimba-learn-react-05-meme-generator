import Logo from '../assets/favicon.svg';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<div className='navbar__logo'>
				<img className='navbar__logo__img' src={Logo} alt='Website Logo' />
				<h1 className='navbar__logo__title'>Meme Generator</h1>
			</div>
			<h2 className='navbar__subtitle'>React Course - Project 5</h2>
		</nav>
	);
};

export default Navbar;
