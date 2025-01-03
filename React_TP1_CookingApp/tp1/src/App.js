import { useState } from "react";
import Header from "./components/Header";
import Meals from "./components/Meals";
import "./styles/index.css";

function App() {
  const [searchData, setSearchData] = useState("");

  const passSearch = (search) => {
    setSearchData(search);
  };

  return (
    <div>
      <Header passSearch={passSearch} />
      <Meals search={searchData} />
    </div>
  );
}

export default App;
