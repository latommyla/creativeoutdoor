import React from 'react';

import Navbar from '../components/Navbar';
import Arcadegame from '../components/Arcadegame';
import Pinballgame from '../components/Pinballgame';
import Racinggame from '../components/Racinggame';
import Footer from '../components/Footer';

export default function Gamelist() {
  return (
    <main>
      <Navbar />
      <Arcadegame />
      <Pinballgame />
      <Racinggame />
      <Footer />
    </main>
  );
}
