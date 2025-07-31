import React from 'react';
import {Link} from "react-router-dom";
const Sidebar: React.FC = () => {
    const SidebarStyle: React.CSSProperties = {
        height: '100%',
        borderRight: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
    }
    return (
        <aside style={{width: "5rem", ...SidebarStyle}}>
            <Link to="/">Home</Link>
            <Link to="/Test1">Test1</Link>
        </aside>
    )
}

export default Sidebar