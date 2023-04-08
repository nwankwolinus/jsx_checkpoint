
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Myprofile from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';

function App() {
  return (
  <div className='App'>
    <Myprofile/>
    <FullName/>
    <Address/>
  </div>
  
  );
}

export default App;
