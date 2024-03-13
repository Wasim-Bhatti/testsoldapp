import React from 'react';
import './App.css';

function LeftColumn() {
  return (
    <div className="left-column">
      <div className="box">
        <h2>📈Payout Spectrum</h2>
        <p>The difficulty & payout indicator of the system. This payout spectrum is a transparent visualization of how we can reward you for your work. The more difficult the prompt, the higher the payout. Another crucial piece of information
          the payout spectrum gives us is the spread of the payout among the top responses of the prompt. Some prompts may only reward the top 
          5 responses, while others may reward the top 50, and the spectrum diagram will visually represent this. 
        </p>
      </div>
    </div>
  );
}

export default LeftColumn;