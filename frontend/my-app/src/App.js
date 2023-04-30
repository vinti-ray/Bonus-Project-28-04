import Itinerary from "./component/random";
import NewItineraryForm from "./component/itinery";
import { BrowserRouter,Route,Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<Itinerary />} />
      <Route path="/iti" element={<NewItineraryForm />} />


    </Routes>
  </BrowserRouter>)
}

export default App;
