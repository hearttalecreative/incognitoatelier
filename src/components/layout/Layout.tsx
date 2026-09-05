import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
  /* Set on pages whose first section is a full-bleed hero. */
  transparentHeader?: boolean;
};

export const Layout = ({ children, transparentHeader = true }: LayoutProps) => (
  <div className="flex min-h-screen flex-col">
    <Header transparent={transparentHeader} />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default Layout;
