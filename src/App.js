import React from 'react';
import Participants from './SideBarParticipants'
import Chat from './SideBarChat'
import SideBarTools from './SideBarTools'

function App() {
  return (
    <div>
      {/* build sidebar */}
      <div className="side-bar">
        <SideBarTools />
        <Chat />
        <Participants />
      </div>
    {/* Build stage */}

    </div>
  );
}

export default App;