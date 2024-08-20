import {useState, useContext, createContext} from 'react';
import './App.css';
import { PiCaretUpBold } from 'react-icons/pi';

const ToggleContext = createContext();

export function Item({children, ...props}){
  const [isShown, setIsShown] = useState(false)
  return (
    <ToggleContext.Provider value={{isShown, setIsShown}}>
      <div id={props.id} className={`${props.className}${isShown ? ' open' :''}`} >{children}</div>
    </ToggleContext.Provider>

  )
};

export function Toggle({ children, ...props }){
  const {isShown, setIsShown} = useContext(ToggleContext)
  return (

    <div className={`${props.className}${isShown ? ' open' : ''}`} onClick={()=>setIsShown(!isShown)}>
      <p style={{margin:0}}>{children}</p>
      <p style={{margin:0}}>{isShown ? (
        <PiCaretUpBold className="icon up" />
      ) : (
        <PiCaretUpBold className="icon down" />
      ) }</p>
    </div>
  )
};

export function Panel({ children, ...props }){
  const {isShown} = useContext(ToggleContext);
  return (
    <div className={`${props.className}${isShown ? ' open' : ''}`}>
      <div className="panel-content">
      {children}
      </div>
    </div>
  )
};


export default function Accordion({children, ...props}) {
  return (
    <div className={props.className}> {children} </div>
  )
}