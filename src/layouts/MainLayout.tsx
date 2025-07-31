import React from 'react';
import Sidebar from "@/components/layout/Sidebar.tsx";
import Calendar from "@/components/global/Calendar.tsx";
interface MainLayoutProps {
    children: React.ReactNode
}
const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
    const MainStyle: React.CSSProperties = {
        width: '100vw',
        height: '100vh',
        display: 'flex',
    }
    const ContainerStyle: React.CSSProperties = {
        width: '100%',
        height: '100%',
        display: 'flex',
    }
    const SectionStyle: React.CSSProperties = {
        width: '50%',
        height: '100%',
    }
    return (
        <main style={MainStyle}>
            <Sidebar />
            <div style={ContainerStyle}>
                <section style={SectionStyle}>
                    <Calendar />
                </section>
                <section style={SectionStyle}>{children}</section>
            </div>
        </main>
    )
}

export default MainLayout;