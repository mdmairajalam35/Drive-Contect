'use client'
import Deshboard from "./components/Deshboard";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <>
    <div className="h-100 w-100">
      <div className="heading">
        <NavigationBar />
      </div>
      <div className="w-full flex flex-row">
        <div className="navigation w-1/5">
          <Deshboard />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
