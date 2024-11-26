import { Bell, Search, UserRound } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function NavbarLayout() {
    return(
        <nav className="flex items-center justify-between bg-white shadow-md px-6 py-4">
            {/* Logo */}
            <div className="flex items-center gap-4">
                <Link href="/">
                    <h1 className="text-2xl font-bold tracking-wide text-blue-600">BeautySalon</h1>
                </Link>
            </div>

            {/* Search Bar */}
            <div className="flex-1 mx-6">
                <div className="relative">
                    <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Input
                        type="text"
                        placeholder="Search services or clients..."
                        className="pl-10 pr-4 py-2 rounded-full border-gray-200 focus:border-blue-500"
                    />
                </div>
            </div>

            {/* Profile and Notifications */}
            <div className="flex items-center gap-6">
                {/* Notification Icon */}
                <button className="relative p-2 hover:bg-gray-100 rounded-full">
                    <Bell className="w-6 h-6 text-gray-600" />
                    {/* Notification Badge */}
                    <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full" />
                </button>

                {/* Profile Dropdown */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-full">
                            <UserRound className="w-8 h-8" />
                            <span className="hidden md:inline-block font-medium">John Doe</span>
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-48 mt-2">
                        <DropdownMenuItem>
                            <Link href="/profile">Profile</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href="/settings">Settings</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <button className="w-full text-left" onClick={() => {/* Add logout logic */}}>
                                Logout
                            </button>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    )
}