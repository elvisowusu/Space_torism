import Header from "./components/Header"
import Home from "./components/Home"


function App() {

  return (
    <div className={`bg-[url(src/assets/homeBackground.jpg)] bg-no-repeat bg-cover h-screen`}>
      <Header/>
      <Home/>
    </div>
  )
}

export default App
