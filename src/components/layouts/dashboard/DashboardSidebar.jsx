"use client";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem, SidebarMenuSub, SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { DashboardSidebarItems } from "@/core/utils/dashboardSidebarItems";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export function DashboardSidebar() {
    const pathname = usePathname();
    const segments = pathname.split("/").filter(Boolean);
    return (
        <Sidebar collapsible="icon" variant="floating" side={`${segments[0] === "en" ? "left" : "right"}`}>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {DashboardSidebarItems.map((item) => (
                                <Collapsible key={item.title} defaultOpen className="group/collapsible">
                                    <SidebarMenuItem>
                                        <CollapsibleTrigger asChild>
                                            {/* isActive = {`${item.url === pathname}`}  for mark a menu item as active  */}
                                            <SidebarMenuButton asChild isActive = {`${item.url === `/${segments[1]}`}`}>
                                                <Link href={item.url}>
                                                    <item.icon />
                                                    <span>{item.title}</span>
                                                </Link>
                                            </SidebarMenuButton>
                                            {/*<SidebarMenuBadge>24</SidebarMenuBadge>  for badges  */}
                                        </CollapsibleTrigger>
                                        <CollapsibleContent>
                                            <SidebarMenuSub>
                                                <SidebarMenuSubItem />
                                            </SidebarMenuSub>
                                        </CollapsibleContent>
                                    </SidebarMenuItem>
                                </Collapsible>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
