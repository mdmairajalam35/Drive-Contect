import ContectTable from "./components/ContectTable";
import Heading from "./components/Heading";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="h-screen w-screen">
      <div className="heading">
        <Heading />
      </div>
      <div className="w-full flex flex-row">
        <div className="navigation w-1/5">
          <Navigation />
        </div>
        <div className="contectTable w-4/5 my-10">
          <ContectTable />
        </div>
      </div>
    </div>
  );
}

export default App;
