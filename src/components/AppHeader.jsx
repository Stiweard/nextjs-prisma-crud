"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconInfo, IconPlus, IconTasks } from "@/components/icons";
import Button from "@/components/ui/Button";

const navItems = [
  { href: "/", label: "Tareas", icon: IconTasks, exact: true },
  { href: "/about", label: "Acerca de", icon: IconInfo, exact: false },
];

function NavLink({ href, label, icon: Icon, exact }) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={[
        "inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
        isActive
          ? "bg-blue-500/15 text-blue-400"
          : "text-slate-400 hover:bg-surface-overlay hover:text-slate-200",
      ].join(" ")}
      aria-current={isActive ? "page" : undefined}
    >
      <Icon className="h-4 w-4" />
      <span className="hidden sm:inline">{label}</span>
    </Link>
  );
}

export default function AppHeader() {
  const pathname = usePathname();
  const showCreateCta = pathname !== "/new" && !pathname.startsWith("/tasks/edit");

  return (
    <header className="sticky top-0 z-50 border-b border-surface-border/80 bg-[#0f1419]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-lg outline-offset-4 transition-opacity hover:opacity-90"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 shadow-glow">
            <IconTasks className="h-5 w-5 text-white" />
          </span>
          <span className="hidden font-semibold tracking-tight text-white sm:block">
            TaskFlow
          </span>
        </Link>

        <nav className="flex items-center gap-1" aria-label="Principal">
          {navItems.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
        </nav>

        {showCreateCta ? (
          <Button href="/new" size="sm" className="shrink-0 whitespace-nowrap">
            <IconPlus className="h-4 w-4" />
            <span className="hidden sm:inline">Nueva</span>
          </Button>
        ) : (
          <div className="w-[88px] shrink-0 sm:w-[100px]" aria-hidden />
        )}
      </div>
    </header>
  );
}
