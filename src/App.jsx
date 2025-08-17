import WeatherApp from './components/Weather'
import LangProvider from './context/LangProvider'

import './App.css'

function App() {

  return (
    <>
      <LangProvider>
        <WeatherApp />
      </LangProvider>
    </>
  )
}

export default App
