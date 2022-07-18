import React, { useState } from 'react';
import './Header.css'


function Header() {
    const [pressedButton, newPressedButton] = useState(0);

    const press = (id: number): void => {
        newPressedButton(id);
    }


    return (
        <header>
            <img alt='Logo of app' src='https://todolist.london/wp-content/uploads/2020/01/To-Do-List-Logo-for-Facebook.jpg'></img>
            <div className="tab">
                <button className={(pressedButton === 0 && 'tablinks active') || "tablinks"} onClick={() => { press(0) }}>День</button>
                <button className={(pressedButton === 1 && 'tablinks active') || "tablinks"} onClick={() => { press(1) }}>Месяц</button>
                <button className={(pressedButton === 2 && 'tablinks active') || "tablinks"} onClick={() => { press(2) }}>Год</button>
            </div>
        </header >

    )
}

export default Header;
