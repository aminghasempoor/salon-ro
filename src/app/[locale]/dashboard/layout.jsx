import DashboardLayout from "@/components/layouts/dashboard";

export default function AuthLayout({ children }) {
    return(
        <DashboardLayout>
            { children }
        </DashboardLayout>
    )
}