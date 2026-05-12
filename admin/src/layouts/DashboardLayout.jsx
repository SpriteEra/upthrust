import { useState } from "react";
import { Sidebar } from "../components/dashboard/Sidebar";
import { Navbar } from "../components/dashboard/Navbar";
import { Outlet } from "react-router-dom";


const DashboardLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    // Single handler: mobile → toggle drawer, desktop → toggle collapse
    const handleMenuClick = () => {
        if (window.innerWidth >= 1024) {
            setCollapsed((c) => !c);
        } else {
            setMobileOpen((o) => !o);
        }
    };

    const sidebarW = collapsed ? 64 : 224;

    return (
        <div className="flex min-h-screen bg-slate-100">
            <Sidebar
                collapsed={collapsed}
                onToggle={() => setCollapsed((c) => !c)}
                mobileOpen={mobileOpen}
                onClose={() => setMobileOpen(false)}
            />

            <div
                className="flex flex-col flex-1 min-w-0 transition-all duration-300 ease-in-out"
                style={{ marginLeft: `${sidebarW}px` }}
            >
                <Navbar onMenuClick={handleMenuClick} />
                <main className="flex-1 overflow-x-hidden px-4 py-3">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}


export default DashboardLayout