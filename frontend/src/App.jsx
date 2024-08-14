import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Signin from "./pages/Signin";
import Register from "./pages/Register";
import Community from "./pages/Community";
import CreateImages from "./pages/CreateImages";
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/new-account" element={<Register />} />
          <Route path="/community" element={<Community />} />
          <Route path="/generate-image" element={<CreateImages />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
