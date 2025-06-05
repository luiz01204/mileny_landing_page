import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="relative h-screen w-full">
            {/* Imagem de fundo */}
            <Image 
                src="/hero.jpg"
                alt="Professora de inglês"
                fill
                className="object-cover"
                quality={100}
                priority
            />

            {/* Overlay azul com opacidade */}
            <div className="absolute inset-0 bg-[#3533CD] opacity-70" />

            {/* Conteúdo por cima */}
            <div className="flex flex-col gap-6 md:py-20 md:pl-20 justify-center items-center md:justify-start md:items-start h-screen px-4 relative">
                <h1 className="font-bold text-white text-5xl text-center md:text-start md:text-7xl md:w-2/3 drop-shadow-lg">
                    Aprenda a pensar em inglês por imersão, forma mais rápida e natural de aprender uma nova língua!
                </h1>

                <a 
                    target="_blank"
                    href={"https://wa.me/5599999999999?text=Olá! Vi sua página e quero saber mais sobre as aulas de inglês por imersão."}
                    className="bg-green-500 text-white font-semibold flex items-center gap-2 rounded-full border-none px-6 py-3 justify-center cursor-pointer hover:bg-green-600 transition">
                    <FaWhatsapp size={24} />
                    Fale comigo no WhatsApp  
                </a>   
            </div>
        </section>
    );
}
