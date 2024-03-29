import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chat from './pages/Chat';
import Main from './Main';
import AreaTourDetail from './pages/AreaTourDetail';
import "./App.css";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Mypage from './pages/Mypage';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/AIchat" element={<Chat />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Mypage" element={<Mypage />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/Detail" element={<AreaTourDetail />}></Route>
        <Route path="/" element={<Main />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;