// import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Todos from "./Components/Todos";

function App() {
  let todos = [
    {
      sno: 1,
      title: "Go to Market",
      desc: "Go to market to purchase items."
    },
    {
      sno: 2,
      title: "Go to Mall",
      desc: "Go to market to purchase cloths."
    },
    {
      sno: 3,
      title: "Go to Bank",
      desc: "Go to bank to deposit money."
    }
  ]
  return (
    <>
      <Header title="My Todos List" searchBar={false}/>
      <Todos todos = {todos}/>
      <Footer/>
    </>
  );
}

export default App;
