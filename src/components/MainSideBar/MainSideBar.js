import React from 'react'
import './MainSideBar.css';
import {BsCardList, BsFillPeopleFill, BsFillBarChartFill, BsAwardFill, BsBoxArrowInRight} from "react-icons/bs";
import {BiTask} from "react-icons/bi";

const MainSideBar = (props) => {

    const listItems = [{label: 'Test bases', labelToDisplay: 'Бази тестових завдань', icon: <BsCardList size={25}/>},
        {label: 'Test tasks', labelToDisplay: 'Тести', icon: <BiTask size={25}/>},
        {label: 'Respondents', labelToDisplay: 'Призначення', icon: <BsFillPeopleFill size={25}/>},
        {label: 'Test results', labelToDisplay: 'Результати', icon: <BsFillBarChartFill size={25}/>},
        {label: 'My results', labelToDisplay: 'Мої результати', icon: <BsAwardFill size={25}/>}
    ];

    const list = listItems.map(listItem => {
        return (
            <li onClick={() => props.onNavClick(listItem.label)}>
                <div className="nav-item">
                    <div className="nav-item-icon">{listItem.icon}</div>
                    <div className="nav-item-label">{listItem.labelToDisplay}</div>
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
                        Test Builder
                    </div>
                    <hr/>
                </li>
                {list}
                <li>
                    <div className="nav-item">
                        <div className="nav-item-icon"><BsBoxArrowInRight size={25}/></div>
                        <div className="nav-item-label">Вийти</div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default MainSideBar;