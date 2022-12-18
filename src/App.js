import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';

function App() {
  const [zone, setZone] = useState("Zone 1");
  const [size, setSize] = useState(500);
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
    <div class="jumbotron vertical-center back-gray" >
      <div class="container-sm w-50 bg-light p-5 rounded">
        <form>
          <legend>Property facts</legend>
          <div class="row">
            <div class="col-sm-4">
              <div class="form-group col-xs-10 col-md-10">
                <label for="disabledSelect" class="form-label">Zone</label>
                <select class="form-select" onChange={handleZoneChange}>
                  <option value="Zone 1">Zone 1</option>
                  <option value="Zone 2">Zone 2</option>
                  <option value="Zone 3">Zone 3</option>
                </select>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="form-group col-xs-10 col-md-10">
                <div class="mb-3">
                  <label for="disabledTextInput" class="form-label">Size</label>
                  <input type="number" class="form-control" placeholder="sm" onChange={handleSizeChange} />
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="form-group col-xs-10 col-md-10">
                <div  class="form-label">Is flooding area?</div>
                <div class="form-check">
                  <input class="form-check-input" onChange={handleCheckChange} type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                      Flood area
                    </label>
                </div>
              </div>
            </div>
          </div>
          <button type="button" class="btn btn-primary mt-2" onClick={handleSubmit}>Submit</button>
        </form>
        <hr class="bg-danger border-2 border-top border-secondary"></hr>
        <div class="h4 mt-4 mb-3">
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

