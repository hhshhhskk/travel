import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './Main';
import Chat from './Chat';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/AIchat" element={<Chat />}></Route>
        <Route path="/" element={<Main />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
