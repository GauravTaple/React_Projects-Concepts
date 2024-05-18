import './App.css';
import Form from './Components/Form';
import AxiosGet from './Components/AxiosGet';
import AxiosPost from './Components/AxiosPost';
import Map from './Components/Map';
import Navigation from '../../project2/src/Components/Navigation';

function App() {
  return (
    <>
      <Form />
      <hr />
      <AxiosGet />
      <hr />
      <AxiosPost />
      <hr />
      <Map />
      <hr />
      <Navigation />
    </>
  );
}

export default App;
