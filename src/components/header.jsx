import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="shadow-md bg-white">
            <nav>
                {/* Top Row: Logo & Social Icons */}
                <div className="border-b py-3">
                    <div className="container mx-auto px-4 flex justify-between items-center">
                        <h2 className="text-xl font-semibold">
                            <span className="font-bold">
                                <span className="text-blue-600">G</span>
                                <span className="text-red-600">D</span>
                                <span className="text-yellow-500">G</span>
                                <span className="text-green-600"> KWASU</span>
                            </span>
                        </h2>

                        <div className="flex items-center space-x-4">
                            <a href="https://x.com/gdgoc_kwasu" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <FaXTwitter className="w-5 h-5 text-gray-600 hover:text-blue-600 transition-transform duration-200 hover:scale-110" />
                            </a>
                            <a href="https://www.instagram.com/gdgoc_kwasu" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FaInstagram className="w-5 h-5 text-gray-600 hover:text-pink-500 transition-transform duration-200 hover:scale-110" />
                            </a>
                            <a href="https://chat.whatsapp.com/FYgQ4yHtiWR1wh6BP62GnM" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                                <FaWhatsapp className="w-5 h-5 text-gray-600 hover:text-green-600 transition-transform duration-200 hover:scale-110" />
                            </a>
                            <a href="https://www.youtube.com/@gdgoc_kwasu" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FaYoutube className="w-5 h-5 text-gray-600 hover:text-blue-700 transition-transform duration-200 hover:scale-110" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Row: Navigation Links */}
                <div className="bg-gray-50">
                    <div className="container mx-auto px-4 py-3 flex space-x-6 justify-center text-sm sm:text-base font-medium">
                        <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
                        <Link to="/get-dp" className="text-gray-700 hover:text-blue-600 transition-colors">Get DP</Link>
                        {/* <Link to="/sponsors" className="text-gray-700 hover:text-blue-600 transition-colors">Sponsors</Link> */}
                    </div>
                </div>
            </nav>
        </header>
    );
}
