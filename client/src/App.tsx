import { Navigation } from "components/Navigation/Navigation";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { HomePage } from "views/HomePage";
import { ShopPage } from "views/ShopPage";


function App() {
  return (
 
    <BrowserRouter>
       <div className="font-Poppins bg-secondary">
          <Navigation/>
          <main> 
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/shop/*" element={<ShopPage />}></Route>
              <Route path="/cart" element={<></>}></Route>
              <Route path="/profile" element={<></>}></Route>
            </Routes>
          </main>
      </div>
    </BrowserRouter>

  );
}

export default App;
