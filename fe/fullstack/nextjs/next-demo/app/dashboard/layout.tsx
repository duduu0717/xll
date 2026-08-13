import Link from "next/link";
import type { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <nav>
        <Link href="/dashboard/settings">后台管理系统设置</Link>
      </nav>
      {children}
    </div>
  );
}