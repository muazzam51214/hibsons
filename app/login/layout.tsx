// app/login/layout.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";
import { redirect } from "next/navigation";

export default async function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (session?.user?.role) {
    const { role } = session.user;

    const roleRedirects: Record<string, string> = {
      admin: "/admin/dashboard",
      hr: "/hr/dashboard",
      sales: "/sales/dashboard",
      associate: "/associate/dashboard",
      client: "/client/dashboard",
    };

    redirect(roleRedirects[role] || "/");
  }

  return <>{children}</>;
}
