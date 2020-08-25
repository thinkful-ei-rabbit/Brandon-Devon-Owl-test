import React from 'react';
import Participants from './SideBarParticipants'
import Chat from './SideBarChat'
import SideBarTools from './SideBarTools'


function App(props) {
  return (
    <div>
      {/* build sidebar */}
      <div className="side-bar">
        <SideBarTools />
        <Chat />
        {props.store.participants.map(p => (
          <Participants 
            info={p}
          />
        ))}
        
      </div>
    {/* Build stage */}

    </div>
  );
}

export default App;