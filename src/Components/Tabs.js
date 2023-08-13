import React, { useState } from "react";
import style from "./style.css";

const Tabs = (props) => {
    // save index of tab
    const [active, setActive] = useState(0);
    document.addEventListener("tabActive", (event) => {
        var index = parseInt(event.detail) + 1;
        console.log("Tab " + index + " is active!");
    });

    const clickHandler = (index) => {
        const event = new CustomEvent("tabActive", { detail: index });
        document.dispatchEvent(event);
        setActive(index);
    }

    return (
        <>
            <div className="tabs">
                {props.items.map((item, index) => {
                    return (
                        <button className={active === index ? "active" : ""} key={index} onClick={() => clickHandler(index)}>{item.label}</button>
                    )
                })}
            </div>
            <div className="content">
            {props.items.map((item, index) => {
                    return (
                        <div key={index} className={active === index ? "active" : ""}>{item.content}</div>
                    )
                })}
            </div>
        </>
    )
}

export default Tabs;