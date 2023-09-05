import './App.css'
import { useState } from 'react'
import LanguageContext, { languages } from './context';
import Navbar from './components/Navbar';
import Body from './components/Body';

function App() {

  const [language, setLanguage] = useState(languages.english);

  const handleChangeLA = () => {
    setLanguage(() => {
      if(language=== languages.english){
        return languages.spanish
      }else if(language=== languages.spanish){
        return languages.portuguese
      }else{
        return languages.english
      }
    })
  }

  return (
    <div className="App">
      <LanguageContext.Provider value={{language , handleChangeLA}}>
        <Navbar />
        <Body />
      </LanguageContext.Provider>
    </div>
  );
}

export default App
