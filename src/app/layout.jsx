import { Plus_Jakarta_Sans } from "next/font/google";
import AppHeader from "@/components/AppHeader";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: {
    default: "TaskFlow — Gestión de tareas",
    template: "%s | TaskFlow",
  },
  description: "CRUD de tareas con Next.js, Server Actions y Prisma",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={jakarta.variable}>
      <body className="min-h-dvh font-sans antialiased">
        <AppHeader />
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 sm:pt-10">
          {children}
        </div>
      </body>
    </html>
  );
}
