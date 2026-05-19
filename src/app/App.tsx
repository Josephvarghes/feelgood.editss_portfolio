import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedWork } from './components/FeaturedWork';
import { CoreServices } from './components/CoreServices';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden" style={{ backgroundColor: '#0B0B0C' }}>
      <Header />
      <Hero />
      <FeaturedWork />
      <CoreServices />
      <Footer />
    </div>
  );
}
