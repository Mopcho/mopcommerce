import { BestSellers } from "components/BestSellers/BestSellers";
import { Hero } from "components/Hero/Hero";
import { Navigation } from "components/Navigation/Navigation";
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return (
 
    <BrowserRouter>
       <div className="font-Poppins bg-secondary">
          <Navigation/>
          <main> 
            <Routes>
              <Route path="/" element={<> <Hero/> <BestSellers /> </>}></Route>
              <Route path="/shop" element={<></>}></Route>
              <Route path="/cart" element={<></>}></Route>
              <Route path="/profile" element={<></>}></Route>
            </Routes>
          </main>
      </div>
    </BrowserRouter>

  );
}

export default App;
