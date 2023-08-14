import satData from './satData'

const Buttons = () => {
  return (
    {displaySats.map((sat, id) => {
      return (
        <div>
        <button onClick={() => filterByType(sat)} key={id}>
        {sat} Orbit
        </button>
        <button>All Orbits</button>
        </div>
        );
      })}
  );
};

export default Buttons;