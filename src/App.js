import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';

function App() {
  const [zone, setZone] = useState("Zone 1");
  const [size, setSize] = useState(0);
  const [flood, setFlood] = useState(false);
  const [analysis, setAnalysis] = useState("None");


  const handleZoneChange = (event) => {
    setZone(event.target.value)
  }
  const handleCheckChange = (event) => {
    setFlood(event.target.checked)
  }
  const handleSizeChange = (event) => {
    setSize(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (flood === false) {
      setAnalysis("Single Dwelling House");
      if (zone === "Zone 2" && size >= 500) {
        setAnalysis("Single Dwelling House, Apartment Complex");
      }
      if (zone === "Zone 3" && size >= 500) {
        setAnalysis("Single Dwelling House, Apartment Complex");
        if (zone === "Zone 3" && size >= 1000) {
          setAnalysis("Single Dwelling House, Apartment Complex, Commercial Building");
        }
      }
    } else {
      setAnalysis("None");
    }
  }



  return (
    <div id="geeks">
      <div id="centre">
        <div class="title">
          Property Facts
        </div>
        <form onSubmit={handleSubmit}>
          <div id="formcontainer">
            <div id="leftbox">
              <label>
                Zone:
              </label>
              <select name="zone" onChange={handleZoneChange} value={zone}>
                <option value="Zone 1">Zone 1</option>
                <option value="Zone 2">Zone 2</option>
                <option value="Zone 3">Zone 3</option>
              </select>
            </div>
            <div id="middlebox">
              <label>
                Size:
              </label>
              <input
                id="number"
                name="size"
                type="number"
                onChange={handleSizeChange}
                value={size} />
            </div>
            <div id="rightbox">
              <label>
                Is Flooded?
              </label>
              <input id="checkbox"
                checked={flood}
                onChange={handleCheckChange}
                name="iFlooded"
                type="checkbox" />
            </div>
          </div>
          <div><input class="button button2" type="submit" value="Submit" /></div>
        </form>
        <div class="title">
          Analysis results
        </div>
        <div>
          <p>Based on the submitted property facts, the allowed building types are:</p>
        </div>
        <div id="analysis">
          {analysis}
        </div>
      </div>
    </div>

  )
}
export default App;

