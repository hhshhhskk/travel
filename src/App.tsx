import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chat from './Chat';
import Main from './Main'; import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <Routes>
          <Route path="/AIchat" element={<Chat />}></Route>
          <Route path="/" element={<Main />}>
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;