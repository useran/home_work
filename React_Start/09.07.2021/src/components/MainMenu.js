import './MainMenu.css';
import DropMenu from './DropMenu';
import menuOpt from './react-dropMenu-task.json';


function MainMenu({ text }) {
  const compDropMenu = obj => {
    const arr = [];
    for (const [key, value] of Object.entries(obj.properties.MainMenu.properties)){
      arr.push(<DropMenu key={key} className={key} data={value.properties} text={<value.font>{key}</value.font>}  />)
    }
    return arr;
  }

  return (
    <div className = 'mainmenu'>
      <div>{text}</div>
      <div className='submenu'>
        { compDropMenu(menuOpt) }
      </div>
    </div>
  );
}

export default MainMenu;
