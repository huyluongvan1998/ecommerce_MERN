import Header from './Components/Header';
import Footer from "./Components/Footer";
import HomeScreen from './Screens/HomeScreen';
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import  ProductScreen  from "./Screens/ProductScreen";

function App() {
  return (
    <Router>
      <Header />  
      <main>
        <Container>
          <h1 className='text-center'>Welcome to Jack's Tea</h1>  
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen}  />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
