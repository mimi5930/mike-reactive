import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';

// different page sections
const sections = [
	{
		name: 'About Me',
		dataId: 'about-me'
	},
	{
		name: 'Portfolio',
		dataId: 'portfolio'
	},
	{
		name: 'Resume',
		dataId: 'resume'
	},
	{
		name: 'Contact',
		dataId: 'contact'
	}
];

const links = [
	{ name: 'GitHub', icon: 'url', url: 'link' },
	{ name: 'LinkedIn', icon: 'url', url: 'link' },
	{ name: 'Stack Overflow', icon: 'url', url: 'link' }
];

function App() {
	const [currentContent, setContent] = useState('about-me');

	return (
		<div>
			<Header
				sections={sections}
				currentContent={currentContent}
				setContent={setContent}
			></Header>
			{currentContent === 'about-me' && <AboutMe></AboutMe>}
			{currentContent === 'contact' && <Contact></Contact>}
			<Footer links={links}></Footer>
		</div>
	);
}

export default App;
