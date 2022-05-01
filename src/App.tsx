import React, {useState} from 'react';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import Header from './components/header/header';
import { Navbar } from './components/navbar';

function App() {

  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light'? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <GlobalStyle/>
      <Navbar />
      <Header toggleTheme={toggleTheme} />
    </div>
    </ThemeProvider>
  );
}

export default App;
