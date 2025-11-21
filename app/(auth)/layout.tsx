import React, { ReactNode } from "react";
import Navbar from "@/components/navigation/navbar";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      {children}
    </main>
  );
};

export default AuthLayout;
