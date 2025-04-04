import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="">
      Navbar
      <div className="flex">
        LeftSidebar
        <section className="">
            <div className="">
                {children}
            </div>
        </section>

        RightSidebar
     </div>
     {/* Toaster */}
    </main>
  );
};

export default Layout;
