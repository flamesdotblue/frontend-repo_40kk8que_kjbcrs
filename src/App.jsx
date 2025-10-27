import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Projects />
      </main>
      <ContactFooter />
    </div>
  );
}

export default App;
