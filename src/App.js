import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import {useState} from "react";
import satData from "./components/satData";

let displaySats;

function App() {
  const [sat, setSat] = useState(satData);
  const displayStatus = [...new Set(satData.map((data) => data.orbitType))];
  const filterByType = (currentType) => {
     displaySats = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
    });
    setSat(displaySats);
  };

  return (
    <div>
      <Banner />
      <Buttons
        filterByType={filterByType}
        setSat={setSat}
        displaySats={displayStatus}
      />
      <Table sat={sat} />
    </div>
  );



}

export default App;
