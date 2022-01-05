import Title from "./Components/Title";
import Name, { pp, hello } from "./Components/Name";

import Input from "./Components/Input";
function App() {

  const HandleClick = (e) => {
    console.log("clicked : ", e)
  }

  const HandleChange = (e) => {
    console.log(e.target.value);
  }
  const HandleKeyPress = (e) => {
    // console.log(e.key)
  }
  return (
    <div className="container-main">
      <input onKeyPress={HandleKeyPress} onChange={(e) => HandleChange(e)} className="inputtxt"></input>
      <button onClick={e => {
        console.log("Hey Clicked")
      }} className="btn" >Submit</button>
      <Name name1="Ashutosh" name2="Singh" />
    </div>
  );
}
// React Fragment

export default App;
