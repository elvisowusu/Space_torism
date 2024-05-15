import Header from "./components/Header"
import Home from "./components/Home"


function App() {
  
  return (
    <div className={`bg-[url(src/assets/home/background-home-mobile.jpg)] md:bg-[src/assets/home/background-home-tablet.jpg)] lg:bg-[url(src/assets/home/background-home-desktop.jpg)] bg-no-repeat  lg:bg-no-repeat bg-cover overflow-hidden h-screen lg:h-[100vh]`}>
      <Header/>
      <Home/>
    </div>
  )
}

export default App
