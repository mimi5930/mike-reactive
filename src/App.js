import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';

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
			<Footer></Footer>
		</div>
	);
}

export default App;
