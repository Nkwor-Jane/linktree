import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import ContactMe from "./components/ContactMe";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <Router>
      <div className="body">
        {/* <Routes>
          <Route exact to="/" element={<ProfilePage/>}/>
          <Route to ="/contact" element={<Navigate to="/contact"/>}/>
        </Routes> */}
        <ProfilePage/>
      </div>
    </Router>
    
  );
}

export default App;
