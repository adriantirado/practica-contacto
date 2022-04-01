import logo from './logo.svg';
import './App.css';

import Relox2 from './components/pure/relox2';
import Reloj from './components/pure/forms/Reloj';
import Contactlist from './components/containers/contactlist';
import Mouse from './components/pure/forms/Mouse';
import TaskListComponent from './components/containers/task_list';

function App() {
  return (
    <div className="App">
 
   {/*<Contactlist></Contactlist>*/}
    <TaskListComponent></TaskListComponent>
     
    </div>
  );
}

export default App;
