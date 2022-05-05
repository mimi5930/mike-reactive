import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

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

// bottom links
const links = [
  { name: 'GitHub', url: 'https://github.com/mimi5930' },
  {
    name: 'LinkedIn',

    url: 'https://www.linkedin.com/in/michael-miller-4b72331a2/'
  },
  {
    name: 'Stack Overflow',

    url: 'https://stackoverflow.com/users/18838778/mike-miller'
  }
];

// projects
const projects = [
  {
    name: 'Ritual',
    pic: 'ritual.png',
    features: 'MERN, GraphQL, Chakra UI, React useContext',
    url: 'https://ritual-app-01.herokuapp.com/',
    gitHub: 'https://github.com/Metelak/Ritual'
  },
  {
    name: 'Travel Bug',
    pic: 'travel-bug.png',
    features: 'mySql, Handlebars, Express',
    url: 'https://travelbug-project.herokuapp.com/',
    gitHub: 'https://github.com/Metelak/Travel-bug'
  },
  {
    name: 'My Shopping List',
    pic: 'my-shopping-list.png',
    features: 'Best Buy API, Bing Maps API, Materialize CSS',
    url: 'https://mimi5930.github.io/my-shopping-list/',
    gitHub: 'https://github.com/mimi5930/my-shopping-list'
  },
  {
    name: 'Code Crazy',
    pic: 'code-crazy.png',
    features: 'mySql, Handlebars, Express',
    url: 'https://fathomless-dusk-37377.herokuapp.com/',
    gitHub: 'https://github.com/mimi5930/code-crazy'
  },
  {
    name: 'Coding Quiz',
    pic: 'coding-quiz.png',
    features: 'Javascript',
    url: 'https://mimi5930.github.io/coding-quiz/',
    gitHub: 'https://github.com/mimi5930/coding-quiz'
  },
  {
    name: 'Mike Miller Violin',
    pic: 'mike-violin.png',
    features: 'HTML, CSS, JS',
    url: 'https://www.mikemillerviolin.com/',
    gitHub: 'https://github.com/mimi5930/mike-miller-violin'
  },
  {
    name: 'Kids Visits',
    pic: 'kids-visits.png',
    features: 'Working with a client to design their website',
    url: 'https://mimi5930.github.io/kids-visits/',
    gitHub: 'https://github.com/mimi5930/kids-visits'
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
      {currentContent === 'contact' && <Contact></Contact>}
      {currentContent === 'portfolio' && (
        <Portfolio projects={projects}></Portfolio>
      )}
      {currentContent === 'resume' && <Resume></Resume>}
      <Footer links={links}></Footer>
    </div>
  );
}

export default App;
