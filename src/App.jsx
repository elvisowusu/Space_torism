import Header from "./components/Header"
import Home from "./components/Home"


function App() {

  return (
    <div className={`bg-[url(src/assets/homeBackground.jpg)] bg-no-repeat bg-cover overflow-hidden h-screen lg:h-[97.8vh]`}>
      <Header/>
      <Home/>
    </div>
  )
}

export default App
