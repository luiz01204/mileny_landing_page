import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaWhatsapp, FaGlobe, FaStar } from "react-icons/fa";

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-[#3533CD] flex flex-col items-center justify-center px-4 py-16 text-white">
      {/* Foto redonda */}
      <div className="mb-8 rounded-full overflow-hidden w-50 h-50 border-4 border-white shadow-lg">
        <Image
          src="/leny.webp"
          alt="Foto de perfil Teacher Mi"
          width={260}
          height={260}
          className="object-cover"
          priority
        />
      </div>

      <h1 className="text-2xl md:text-4xl font-bold mb-8 text-center">Conecte-se com a Teacher Mi</h1>

      <div className="flex flex-col gap-4 w-full max-w-md">
        <Link
          href="/"
          className="bg-white text-[#3533CD] flex items-center justify-center gap-3 py-3 px-6 rounded-xl font-semibold shadow hover:scale-105 transition"
        >
          <FaGlobe size={20} /> Ir para o site
        </Link>

        <Link
          href="https://wa.me/5599999999999"
          target="_blank"
          className="bg-white text-[#3533CD] flex items-center justify-center gap-3 py-3 px-6 rounded-xl font-semibold shadow hover:scale-105 transition"
        >
          <FaWhatsapp size={20} /> WhatsApp
        </Link>

        <Link
          href="https://www.superprof.com.br/aprenda-pensar-ingles-por-imersao-forma-rapida-natural-aprender-uma-nova-lingua.html"
          target="_blank"
          className="bg-white text-[#3533CD] flex items-center justify-center gap-3 py-3 px-6 rounded-xl font-semibold shadow hover:scale-105 transition"
        >
          <FaStar size={20} /> Ver Avaliações (Superprof)
        </Link>
      </div>
    </main>
  );
}
