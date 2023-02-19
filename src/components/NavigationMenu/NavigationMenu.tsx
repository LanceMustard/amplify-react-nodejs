import React from 'react';
import './navigation-menu.css';

interface NavigationMenuItem {
    label?: string,
    link?: string,
    line?: boolean
}

interface NavigationMenuProps {
    title: string,
    items: NavigationMenuItem[]
}

export const NavigationMenu = (props: NavigationMenuProps) => {
    const {
        title,
        items
    } = props

    const myFunction = () => {
        const x = document.getElementById("myLinks");
        if (x !== null) {
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        }
      }

    return (
        <div>
            <div className="topnav">
                <a href="#home" className="title">{title}</a>
                <div id="myLinks">
                    { items.map((item, i) => item.line ? <hr/> : <a key={i} href={item.link}>{item.label}</a>)}
                </div>
                <a href="javascript:void(0);" className="icon" onClick={myFunction}>
                    <i className="fa fa-bars"></i>
                </a>
            </div>
        </div>
    )
}