import React from 'react';

function App() {
  return (
    <div>
      <div className="side-bar">
        <div className='side-bar-tools'>
          <button>Chat</button>
          <button>Participant</button>
          <button>Settings</button>
          <button>Tools</button>
          <button>FAQ</button>
        </div>
        <div className='side-bar-partcipants'>
          <div className='side-bar-participant'>
            <img src="" alt=""/>
            <div>
              <div>NAME</div>
              <div>ON STAGE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;