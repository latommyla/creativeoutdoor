import React from 'react';

import Navbar from '../components/Navbar';
import Manual2p from '../components/PlayerManual2p';
import Manual4p from '../components/PlayerManual4p';
import Pinball from '../components/PinballManual';
import Racing from '../components/RacingManual';
import Footer from '../components/Footer';

export default function Manual() {
  return (
    <main>
      <Navbar />
      <Manual2p />
      <Manual4p />
      <Pinball />
      <Racing />
      <Footer />
    </main>
  );
}