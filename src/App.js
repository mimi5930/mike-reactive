import Header from './components/Header';
import Footer from './components/Footer';

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
	return (
		<div>
			<Header sections={sections}></Header>
			<div>Body</div>
			<Footer></Footer>
		</div>
	);
}

export default App;
