import Itinerary from "./component/random";
import NewItineraryForm from "./component/itinery";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import ShowUser from "./component/updateiti";

function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<Itinerary />} />
      <Route path="/id" element={<ShowUser />} />

      <Route path="/iti" element={<NewItineraryForm />} />
      

    </Routes>
  </BrowserRouter>)
}

export default App;
