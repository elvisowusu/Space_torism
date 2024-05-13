import Header from "./components/Header"
import Home from "./components/Home"


function App() {

  return (
    <div className={`bg-[url(src/assets/homeBackground.jpg)] bg-no-repeat md:bg-repeat-round lg:bg-no-repeat bg-cover md:bg-contain  overflow-hidden h-screen lg:h-[100vh]`}>
      <Header/>
      <Home/>
    </div>
  )
}

export default App
