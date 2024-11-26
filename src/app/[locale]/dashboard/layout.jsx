import DashboardLayout from "@/components/layouts/dashboard";
import NavbarLayout from "@/components/layouts/navbar";

export default function AuthLayout({ children }) {
    return (
        <>
            {/*<NavbarLayout/>*/}
            <DashboardLayout>
                {children}
            </DashboardLayout>
        </>
    );
}