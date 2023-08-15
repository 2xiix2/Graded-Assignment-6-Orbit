import satData from './satData'
// import {displaySats, filterByType} from "../App.js" 

const Buttons = ({filterByType, setSat, displaySats}) => {
  return (
    <div>
    {displaySats.map((sat, id) => {
      return (
        <button onClick={() => filterByType(sat)} key={id}>
        {sat} Orbit
        </button> );
      })}
      <button onClick={() => setSat(satData)}>All Orbits</button>
      </div>
      );
};


export default Buttons;