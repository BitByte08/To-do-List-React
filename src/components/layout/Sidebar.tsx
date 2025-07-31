import React from 'react';

const Sidebar: React.FC = () => {
    const SidebarStyle: React.CSSProperties = {
        height: '100%',
        borderRight: '1px solid black',
    }
    return (
        <aside style={{width: "5rem", ...SidebarStyle}}>
            Sidebar
        </aside>
    )
}

export default Sidebar