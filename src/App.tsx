import React from 'react';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import usePersistedState from './utils/usePersistedState'
import Header from './components/header/header';
import Home from './components/header/Home/home';
import Feature from './components/header/Features/feature';
import Pricing from './components/header/Pricing/pricing';
import Team from './components/header/Team/team';

function App() {

  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light'? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <GlobalStyle/>
      <Header toggleTheme={toggleTheme}/>
      <Home />
      <Feature />
      <Pricing />
      <Team />
    </div>
    </ThemeProvider>
  );
}

export default App;
