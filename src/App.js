import "./App.css";
import { Header } from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import S1 from "./components/S1";
import S2 from "./components/S2";
import S3 from "./components/S3";
import S4 from "./components/S4";



function App() {
  return (
    <div className="App">
      <Header />
      <S1  />
      <S2 />
      <S3 />
      <S4/>
    </div>
  );
}

export default App;
