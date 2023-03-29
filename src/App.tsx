import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chat from './pages/Chat';
import Main from './Main';
import AreaTourDetail from './pages/AreaTourDetail';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/AIchat" element={<Chat />}></Route>
        <Route path="/Detail" element={<AreaTourDetail />}></Route>
        <Route path="/" element={<Main />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;