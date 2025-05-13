
import { Link } from "react-router-dom";
import { Tags } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-blue-600">Panduan API AI</div>
          <div className="flex space-x-6">
            <Link to="/" className="hover:text-blue-600 transition-colors">
              🏠 Panduan
            </Link>
            <Link to="/tags" className="hover:text-blue-600 transition-colors flex items-center gap-1">
              <Tags className="w-4 h-4" /> Tag Template
            </Link>
            <Link to="/about" className="hover:text-blue-600 transition-colors">
              👨‍💻 Tentang Saya
            </Link>
            <Link to="/bank" className="hover:text-blue-600 transition-colors">
              💳 Rekening
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
