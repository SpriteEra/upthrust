import {
    Menu,
    Search, ShoppingCart, Bell, Settings, Moon, Globe,
    ChevronDown,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import UploadButtons from "../bunny/UploadBunny";


export const Navbar = ({ onMenuClick }) => {

    const { user } = useAuth();

    console.log("User in Navbar:", user);

    const name = user?.name?.name || "User";

    return (
        <header className="sticky top-0 z-30 h-[60px] bg-white border-b border-slate-200 flex items-center px-5 gap-3">
            <button
                onClick={onMenuClick}
                className="flex items-center justify-center p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors duration-150"
                aria-label="Toggle menu"
            >
                <Menu size={20} />
            </button>

            <div className="flex items-center gap-2 bg-slate-100 rounded-lg px-3 py-2 flex-1 max-w-[240px]">
                <Search size={14} className="text-slate-400 flex-shrink-0" />
                <input
                    type="text"
                    placeholder="Search…"
                    className="bg-transparent text-[13.5px] text-slate-600 placeholder-slate-400 outline-none w-full"
                />
            </div>

            <div className="flex-1" />

            <div className="flex items-center gap-1">




                {/* <button className="relative p-2 rounded-lg hover:bg-slate-100 text-slate-500 transition-colors duration-150">
                    <Bell size={17} />
                    <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-pink-500 text-white text-[9px] font-bold flex items-center justify-center">5</span>
                </button> */}

                {/* <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-500 transition-colors duration-150">
                    <Settings size={17} />
                </button> */}
                {/* <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-500 transition-colors duration-150">
                    <Moon size={17} />
                </button> */}

                <div>
                    <UploadButtons />
                </div>

                <button className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-slate-100 transition-colors duration-150 ml-1">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                        {name.charAt(0).toUpperCase()}
                    </div>
                    <span className="hidden sm:inline text-[13px] font-medium text-slate-700">{name}</span>
                    <ChevronDown size={12} className="text-slate-400 hidden sm:block" />
                </button>
            </div>
        </header>
    );
}