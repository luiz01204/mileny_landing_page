// components/Footer.tsx

import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#3533CD] text-white py-8 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-center md:text-left text-sm">
                    © {new Date().getFullYear()} Teacher Mi — Todos os direitos reservados.
                </p>

                <div className="flex gap-4 items-center">
                    <a
                        href="https://wa.me/5599999999999?text=Oi Teacher Mi! Gostaria de saber mais sobre suas aulas de inglês."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-300 transition"
                    >
                        <FaWhatsapp size={24} />
                    </a>
                    <a
                        href="https://instagram.com/teacher_mi" // substitua com o @ real depois
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-300 transition"
                    >
                        <FaInstagram size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
