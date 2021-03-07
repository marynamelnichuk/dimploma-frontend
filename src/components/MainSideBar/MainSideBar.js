import React from 'react'
import './MainSideBar.css';
import {BsCardList, BsFillPeopleFill, BsFillBarChartFill, BsAwardFill} from "react-icons/bs";
import {BiTask} from "react-icons/bi";

const MainSideBar = (props) => {

    const listItems = [{label: 'Test bases', icon: <BsCardList size={25}/>},
        {label: 'Test tasks', icon: <BiTask size={25}/>},
        {label: 'Respondents', icon: <BsFillPeopleFill size={25}/>},
        {label: 'Test results', icon: <BsFillBarChartFill size={25}/>},
        {label: 'My results', icon: <BsAwardFill size={25}/>}
    ];

    const list = listItems.map(listItem => {
        return (
            <li onClick={() => props.onNavClick(listItem.label)}>
                <div className="nav-item">
                    <div className="nav-item-icon">{listItem.icon}</div>
                    <div className="nav-item-label">{listItem.label}</div>
                </div>
                <hr/>
            </li>
        )
    });

    return (
        <div className="sidebar">
            <ul>
                <li>
                    <div className="nav-item nav-item-title">
                        Dumb name
                    </div>
                    <hr/>
                </li>
                {list}
            </ul>
        </div>
    )
}

export default MainSideBar;