import {HeaderComponent} from './Components/HeaderComponent'
import {MainComponent} from './Components/MainComponent'
import {FooterComponent} from './Components/FooterComponent'

function App() {
  document.body.style.backgroundColor = '#0E182A'

  return (
    <div className="w-screen h-screen">
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
    </div>
  )
}

export default App
