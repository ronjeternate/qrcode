import React, { useState } from 'react';
import ReactQRCode from 'react-qr-code';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>QR Code Generator</h1>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter text or URL"
          className="input-field"
        />
        <div className="qrcode-container">
          {inputText && <ReactQRCode value={inputText} />}
        </div>
      </div>
    </div>
  );
}

export default App;
