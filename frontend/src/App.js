import Header from './Components/Header';
import Footer from "./Components/Footer";
import HomeScreen from './Screens/HomeScreen';
import { Container } from "react-bootstrap";
function App() {
  return (
    <>
      <Header />  
      <main>
        <Container className='text-center'>
          <h1>Welcome to Jack's Tea</h1>  
        </Container>
        <HomeScreen />
      </main>
      <Footer />
    </>
  );
}

export default App;
