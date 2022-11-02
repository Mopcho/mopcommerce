import { BestSellers } from "components/BestSellers/BestSellers";
import { Hero } from "components/Hero/Hero";
import { Navigation } from "components/Navigation/Navigation";
import {BrowserRouter} from 'react-router-dom';


function App() {
  return (
 
    <BrowserRouter>
       <div className="font-Poppins bg-secondary">
          <Navigation/>
          <main>
            <Hero/>
            <BestSellers />
          </main>
      </div>
    </BrowserRouter>

  );
}

export default App;
