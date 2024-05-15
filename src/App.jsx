import Header from "./components/Header"
import Home from "./components/Home"


function App() {

  return (
    <div className={`bg-[url(src/assets/homeBackground.jpg)] lg:bg-[url(src/assets/lghomeBackground.jpg)] bg-no-repeat md:bg-repeat lg:bg-no-repeat bg-cover md:bg-contain  lg:bg-cover overflow-hidden h-screen lg:h-[100vh]`}>
      <Header/>
      <Home/>
    </div>
  )
}

export default App
