import type { ReactNode } from "react";
import DashboardShell from "../../Component/Pannellum/DashboardShell";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return <DashboardShell>{children}</DashboardShell>;
}