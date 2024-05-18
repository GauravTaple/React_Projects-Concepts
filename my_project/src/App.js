import './App.css';
import ConditionalRender from './components/ConditionalRender';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import Propps from './components/Propps';

import State from './components/State';
import Welcome from './components/Welcome';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import FormHandler from './components/FormHandler';
import UseReducer from './components/UseReducer';
import CustomHook1 from './Hooks/CustomHook1';
import CustomHook2 from './Hooks/CustomHook2';
import CustomHook4 from './Hooks/CustomHook4';
import CustomHook5 from './Hooks/CustomHook5';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Gaurav"/>
     <Greet name="Manas">
      <button>Action</button>
     </Greet>
     <Greet name="Darshana"/> */}

      {/* <Welcome/> */}

      {/* <Jsx/> */}

      {/* <State /> */}
      {/* <Counter /> */}
      {/* <Welcome /> */}
      {/* <Greet /> */}

      {/* <h3>---------------------------------------------------------------Props Concept -------------------------------------------------------------------------------</h3> */}
      {/* <Propps name="Gaurav">
        <h6> This is children component of Gaurav</h6>
      </Propps>
      <Propps name="Ajay" />
      <Propps name="Akshay" /> */}

      {/* <FunctionClick /> */}

      {/* <ConditionalRender /> */}

      {/* <Stylesheet primary={true} /> */}
      {/* <Inline /> */}


      {/* <FormHandler /> */}

      <UseReducer />

      {/* <CustomHook1 /> */}
      {/* <CustomHook2 /> */}

      {/* <CustomHook4 />
      <CustomHook5 /> */}

    </div>
  );
}

export default App;
