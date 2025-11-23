import React, { ReactNode } from "react";
import Navbar from "@/components/navigation/navbar";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className={"flex-center min-h-screen items-center justify-center bg-auth-light dark:bg-auth-dark bg-cover bg-center bg-no-repeat px-4 py-10"}>
      {children}
    </main>
  );
};

export default AuthLayout;
