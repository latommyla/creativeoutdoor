import React from 'react';

import Arcadegame from '../components/Arcadegame';
import Pinballgame from '../components/Pinballgame';
import Racinggame from '../components/Racinggame';

export default function Gamelist() {
  return (
    <main class="bg-retro bg-cover bg-fixed bg-center">
      <Arcadegame />
      <Pinballgame />
      <Racinggame />
    </main>
  );
}
