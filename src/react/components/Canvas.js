import { useState, createContext } from 'react';
import { locations } from '../../locations';
import CanvasMark from './CanvasMark';

export default function Canvas() {
    const user = {
      avatar: "img/avatar.jpg",
      name: "John Doe"
    };
    const [children, setChildren] = useState([
      <CanvasMark key={0} style={{top: 577.8000030517578, left: 753.3999977111816, backgroundColor: "aliceblue"}} user={user} location={locations[0]}/>,
      <CanvasMark key={1} style={{top: 72.80000305175781, left: 823.3999977111816, backgroundColor: "aliceblue"}} user={user} location={locations[1]}/>,
      <CanvasMark key={2} style={{top: 580.8000030517578, left: 793.3999977111816, backgroundColor: "aliceblue"}} user={user} location={locations[2]}/>,
      <CanvasMark key={3} style={{top: 537.8000030517578, left: 705.3999977111816, backgroundColor: "aliceblue"}} user={user} location={locations[3]}/>,
      <CanvasMark key={4} style={{top: 636.8000030517578, left: 646.3999977111816, backgroundColor: "aliceblue"}} user={user} location={locations[4]}/>,
    ]);
    const [id, setId] = useState(children.length);
    function removeMark(id) {
      // console.log(children);
      // console.log('id: ' + id);
      let newChildren = children.filter((child) => child.key !== id);
      // console.log(newChildren)
      setChildren(newChildren);
    }
    function canvasClick(e) {
      // console.log('add');
      let bounds = e.target.getBoundingClientRect();
      let style = {
          top: e.clientY - bounds.top - 20,
          left: e.clientX - bounds.left - 20,
          backgroundColor: "aliceblue"
      }
      let index = Math.floor(Math.random() * locations.length);
      let newChildren = children.concat([<CanvasMark key={id} style={style} user={user} location={locations[index]}/>]);
      // newChildren = newChildren.map(child =>
      //     <CanvasMark key={child.key} style={child.props.style} user={child.props.user} location={child.props.location} remove={() => removeMark(child.key)}/>
      //     // <CanvasMark key={children.length} style={style} user={user} location={locations[index]} remove={() => removeMark(children.length)}/>
      //     // child
      // );
      // console.log(newChildren)
      setChildren(newChildren);
      setId(id + 1);
    }
    // console.log(children)
    
    return (
      <div className='canvas' onClick={canvasClick}>
        <img className='bg' src='img/moscow_map.png'/>
        { children.length > 0 &&
          children.map((child, i) => <CanvasMark key={child.key} style={child.props.style} user={child.props.user} location={child.props.location} remove={() => removeMark(child.key)}/>) }
      </div>
    );
}

