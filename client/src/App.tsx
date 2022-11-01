import { Hero } from "components/Hero/Hero";
import { Navigation } from "components/Navigation/Navigation";
import {BrowserRouter} from 'react-router-dom';


function App() {
  return (
 
    <BrowserRouter>
       <div className="container font-Poppins">
        <Navigation/>
        <Hero/>
      </div>
    </BrowserRouter>

  );
}

export default App;
