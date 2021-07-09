import './App.css';
import MainMenu from './MainMenu';
import menuOpt from './react-dropMenu-task.json';


function App() {

  return (
    <div className = 'App'>
      <MainMenu text = {<menuOpt.properties.MainMenu.font>{Object.keys(menuOpt.properties)}</menuOpt.properties.MainMenu.font>} />
    </div>
  );
}

export default App;
