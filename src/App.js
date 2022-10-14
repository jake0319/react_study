
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Mypage from './pages/Mypage'
import Gallery from './pages/Gallery'
import Layout from './pages/Layout'
import {Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
return (
    <div>
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route element={<Layout/>}>  
          <Route path="/about" element={<About />}/>
          <Route path="/gallery" element={<Gallery />}/>
          <Route path="/mypage" element={<Mypage />}/>
       </Route>
      </Routes>
      
    </div>
  );
}

export default App;
