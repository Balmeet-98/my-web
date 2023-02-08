// import Career from "./components/Career";
// import Footer from "./components/Footer";
// import Main from "./components/Main";
import Navbar from "./components/Navbar";
// import Skills from "./components/Skills";
// import Experience from "./components/Experience";
// import Skills from "./components/Skills";
import { Data } from "./myData/Data";
import Routing from "./Routing";
// import Education from "./components/Education";
function App() {
  console.log(Data);
  return (
    <div>
      <Navbar />
      <Routing />
    </div>
  );
}

export default App;
