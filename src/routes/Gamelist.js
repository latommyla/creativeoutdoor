import React from 'react';

import Arcadegame from '../components/Arcadegame';
import Pinballgame from '../components/Pinballgame';
import Racinggame from '../components/Racinggame';

export default function Gamelist() {
  return (
    <main class="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-rose-400 via-fuchsia-500 to-indigo-500 sm:bg-retro bg-cover bg-fixed bg-center">
      <Arcadegame />
      <Pinballgame />
      <Racinggame />
    </main>
  );
}
