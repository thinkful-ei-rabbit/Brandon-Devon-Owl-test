import React from 'react';

function App() {
  return (
    <div>
      {/* build sidebar */}
      <div className="side-bar">
        <div className='side-bar-tools'>
          <button>Chat</button>
          <button>Participant</button>
          <button>Settings</button>
          <button>Tools</button>
          <button>FAQ</button>
        </div>
        <div className='side-bar-chat'>
          <div className='chat-messages'>
            <span>Time</span>
            <div className='chat-message'>name said</div>
          </div>
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
    {/* Build stage */}

    </div>
  );
}

export default App;