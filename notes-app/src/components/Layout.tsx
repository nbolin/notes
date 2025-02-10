import { ReactNode } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/ivim-new@2x.png';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full min-h-screen bg-secondary text-gray-900 flex flex-col">
      {/* Header */}
      <header className="bg-secondary p-4 shadow-md">
      <nav className="flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="IVIM Notes Logo" className="h-8 w-auto object-contain" />
        </Link>
        <Link to="/create" className="bg-primary text-white px-6 py-4 rounded-md font-bold">
          Create Note
        </Link>
      </nav>
    </header>


      {/* Main Content */}
      <main className="flex-1 p-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-tertiary text-white p-4 mt-auto">
        <p className="text-center">&copy; 2025 IVIM Notes App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
