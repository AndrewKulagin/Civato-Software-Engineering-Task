import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';

function App() {
  const [zone, setZone] = useState("Zone 1");
  const [size, setSize] = useState(600);
  const [flood, setFlood] = useState(false);
  const [analysis, setAnalysis] = useState(
  <ul>
    <li>Single Dwelling House</li>           
  </ul>);

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
      if (zone === "Zone 1") {
        setAnalysis(
          <ul>
            <li>Single Dwelling House</li>           
          </ul>);
      }

      if (zone === "Zone 2") {
        if (size >= 500) {
          setAnalysis(
            <ul>
              <li>Single Dwelling House</li>
              <li>Apartment Complex</li>
            </ul>);
        }
        else {
          setAnalysis(
            <ul>
              <li>Single Dwelling House</li>           
            </ul>);
        }
      }

      if (zone === "Zone 3") {
        if (size >= 500) {
          setAnalysis(
            <ul>             
              <li>Apartment Complex</li>
            </ul>);
          if (size >= 1000) {
            setAnalysis(
              <ul>
                <li>Apartment Complex</li>
                <li>Commercial Building</li>
              </ul>);
          }
        }
        else {
          setAnalysis("None");
        }
      }

    } else {
      setAnalysis("None");
    }
  }



  return (
    <div className="jumbotron vertical-center back-gray" >
      <div className="container-sm w-50 bg-light p-5 rounded">
        <form>
          <legend>Property facts</legend>
          <div className="row">
            <div className="col-sm-4">
              <div className="form-group col-xs-10 col-md-10">
                <label className="form-label">Zone</label>
                <select className="form-select" onChange={handleZoneChange} value={zone} >
                  <option value="Zone 1">Zone 1</option>
                  <option value="Zone 2">Zone 2</option>
                  <option value="Zone 3">Zone 3</option>
                </select>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group col-xs-10 col-md-10">
                <div className="mb-3">
                  <label className="form-label">Size</label>
                  <input type="number" className="form-control" placeholder="square meters" value={size} onChange={handleSizeChange} />
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group col-xs-10 col-md-10">
                <div className="form-label">Is flooding area?</div>
                <div className="form-check">
                  <input className="form-check-input" onChange={handleCheckChange} type="checkbox" checked={flood} id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Flood area
                  </label>
                </div>
              </div>
            </div>
          </div>
          <button type="button" className="btn btn-primary mt-2" onClick={handleSubmit}>Submit</button>
        </form>
        <hr className="bg-danger border-2 border-top border-secondary"></hr>
        <div className="h4 mt-4 mb-3">
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

