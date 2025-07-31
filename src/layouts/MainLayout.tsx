import React from 'react';

interface MainLayoutProps {
    children: React.ReactNode
}
const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
    return (
        <main>
            <aside>main</aside>
            <section>{children}</section>
        </main>
    )
}

export default MainLayout;