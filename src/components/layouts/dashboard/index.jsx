import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/layouts/dashboard/DashboardSidebar";
import { cookies } from "next/headers";

export default async function DashboardLayout({ children }) {
    const cookieStore = await cookies();
    const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";
    return (
        <SidebarProvider defaultOpen={defaultOpen}>
            <DashboardSidebar />
            <SidebarInset>
                <main>
                    <SidebarTrigger />
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}
