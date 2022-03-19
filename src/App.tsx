import { useState } from 'react'
import logo from './logo.svg'
import './App.css'


function App() {
  const accounts = new Array(15).fill('ZyAlt');

  return (
    <div className="App">
      <header className="App-header">
        <div className={'account-container'}>
            {accounts.map((a,i) => Account(a,i))}
        </div>
      </header>
    </div>
  )
}

const Account = (a, i) => {
    return (
        <div key={i} className={'account'}>
            <div style={{backgroundColor: getColorCode()}} className={'account-color'}>{''}</div>
            <div style={{display: "flex", flexDirection: 'column', justifyContent: 'center', marginLeft: '5px'}}>
                <img height={'32px'} width={'32px'} src="https://api.iconify.design/simple-icons/dungeonsanddragons.svg" alt="dnd" />
            </div>
            <div style={{display: "flex", flexDirection: 'column', justifyContent: 'space-evenly', marginLeft: '5px'}}>
                <div style={{color: "gray", fontSize: '0.5em'}}>(current user)</div>
                <div>{a+' - '+(i+1)}</div>
                <div style={{color: "gray", fontSize: '0.5em'}}>19 hours ago</div>
            </div>

        </div>
    )
}

function getColorCode() {
    let makeColorCode = '0123456789ABCDEF';
    let code = '#';
    for (let count = 0; count < 6; count++) {
        code=code+ makeColorCode[Math.floor(Math.random() * 16)];
    }
    return code;
}


export default App
