import { MainContent } from './components/main-content'
import { SideBar } from './components/sidebar'

import './styles/components/app.sass'

function App() {
 
  return (
    <div id="portfolio">
        <h1 id='name'>Tavares Evaristo</h1>
        <SideBar />
        <MainContent/>
    </div>
  )
}

export default App
