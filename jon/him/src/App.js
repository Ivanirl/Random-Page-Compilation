import logo from './logo.svg';
import NavBar from './compontnts/NavBar';
import { Banner } from './compontnts/Banner';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


function App() {
  return (
    <div className="App">
     <NavBar />
     <Banner />
    </div>
  );
}

export default App;
