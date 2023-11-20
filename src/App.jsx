import Navbar from "./components/navbar/navbar";
import Banner from "./components/banner/banner";
import Menubar from "./components/menubar/Menubar";
import Maincontent from "./components/maincontent/maincontent";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";


function App() {

  return (
    <>
      <Navbar />
      <div className="body-content">
        <Banner />
        <div className='content'>
          <Menubar />
          <Maincontent />
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  )
}

export default App
