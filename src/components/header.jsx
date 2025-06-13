import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";

export default function Header() {
    return (
        <header className="shadow-md bg-white">
            <nav className="border-b py-3">
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
                        <a href="https://x.com/gdgoC_Kwasu" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <FaXTwitter className="w-5 h-5 text-gray-600 hover:text-blue-600 transition-all duration-200 transform hover:scale-110" />
                        </a>
                        <a href="https://www.instagram.com/gdgoc_kwasu" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram className="w-5 h-5 text-gray-600 hover:text-pink-500 transition-all duration-200 transform hover:scale-110" />
                        </a>
                        <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                            <FaWhatsapp className="w-5 h-5 text-gray-600 hover:text-green-600 transition-all duration-200 transform hover:scale-110" />
                        </a>
                        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <AiOutlineLinkedin className="w-5 h-5 text-gray-600 hover:text-blue-700 transition-all duration-200 transform hover:scale-110" />
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}
