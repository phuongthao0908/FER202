import CardComponent from './components/CardComponent';
import CarouselComponent from './components/CarouselComponent';
import Navbar from './components/NavbarComponent';
import ReservationForm from './components/ReservationForm';
function App(){
  return (
    <div className="bg-dark text-white">

       <Navbar/>
       <CarouselComponent/>
       <CardComponent/>
       <ReservationForm/>
    </div>
  );
}

export default App;