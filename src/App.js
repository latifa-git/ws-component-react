import "./App.css";
import FullName from "./component/profile/FullName";
import PhotoDeProfile from "./component/profile/ProfilePhoto";
import Adress from "./component/profile/Adress";

function App() {
  return (
    <div className="App">
      <div style={{border:"solid 5px black" ,maxwidth:"50vw"}}>
      <>
        <PhotoDeProfile />
      </>
      <>
        <FullName />
      </>
      <>
        <Adress />
      </>
      </div>
    </div>
  );
}

export default App;
