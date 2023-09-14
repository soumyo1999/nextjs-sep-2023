import './App.css';
import Header from './Components/Header';
import Section from './Components/Section';
import Footer from './Components/Footer';
import Aside from './Components/Aside';
function App() {
  return (
    <>
      <Header />
      <main>
        <Aside />
        <Section />
      </main> 
      <Footer />
    </>
  );
}

export default App;
