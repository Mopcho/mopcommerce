import { Navigation } from "components/Navigation/Navigation";
import {BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <div className="mx-10">
    <BrowserRouter>
      <Navigation></Navigation>
    </BrowserRouter>
    </div>
  );
}

export default App;
