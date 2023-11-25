
import './App.css'
import LeftSidebar from './components/LeftSidebar'
import RightSidebar from './components/RightSidebar'
import Main from './pages/Main'

function App() {

  return (
    <div className="grid grid-cols-8 mt-6">
      <LeftSidebar />
      <Main />
      <RightSidebar />
    </div>
  )
}

export default App
