import Navbar from './components/Navbar';
import Arcadegame from './components/Arcadegame';
import Pinballgame from './components/Pinballgame';

export default function App() {
  return (
    <main>
      <Navbar />
      <Arcadegame />
      <Pinballgame />
    </main>
  );
}