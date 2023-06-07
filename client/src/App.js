import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';

function App()
{
  
  return (
    <div className="App">
      <Router>
        <Link to="/createpost"> Create a post</Link>
        <Link to="/"> Go to home</Link>
        <Routes>
          <Route path='/' element={<Home />} /> //in react router v6 don't use Switch like the tuto
          <Route path='/createpost' element={<CreatePost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;