import { Route, BrowserRouter as Router, Routes,} from "react-router-dom";
import ContactMe from "./components/ContactMe";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <div className="body">
    <Router>
        <Routes>
          <Route exact path ="/" element={<ProfilePage/>}/>
          <Route exact path="/contact" element={<ContactMe/>}/>
        </Routes>
    </Router>
    </div>
    
  );
}

export default App;
