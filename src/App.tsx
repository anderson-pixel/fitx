import React from 'react';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import usePersistedState from './utils/usePersistedState'
import Home from './components/header/Home/home';
import Feature from './components/header/Features/feature';
import Pricing from './components/header/Pricing/pricing';
import Team from './components/header/Team/team';
import Footer from './components/header/Footer/footer';
import Contact from './components/header/Contact/contact';
import About from './components/header/About/about';
import Nvbar from './Pages';



function App() {

  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light'? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <GlobalStyle/>
      <Nvbar/>
      <Home/>
      <Feature />
      <About />
      <Pricing />
      <Team />
      <Contact/>
      <Footer />
    </div>
    </ThemeProvider>
  );
}

export default App;