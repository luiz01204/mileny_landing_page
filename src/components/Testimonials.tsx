// components/Testimonials.tsx

import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function Testimonials() {
    const testimonials = [
        { src: "/depoimento_1.png" },
        { src: "/depoimento_2.png" },
        { src: "/depoimento_3.png" },
        { src: "/depoimento_4.png" },
        { src: "/depoimento_5.png" },
        { src: "/depoimento_6.png" },
        { src: "/depoimento_7.png" },
        { src: "/depoimento_8.png" },
        { src: "/depoimento_9.png" },
    ];

    const superprofLink =
        "https://www.superprof.com.br/aprenda-pensar-ingles-por-imersao-forma-rapida-natural-aprender-uma-nova-lingua.html";

    return (
        <section className="w-full text-[#3533CD]  px-4 py-16">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">Depoimentos de Alunos</h2>

                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {testimonials.map((item, index) => (
                        <a
                            key={index}
                            href={superprofLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-slate-200 p-4 rounded-lg shadow-lg flex justify-center items-center hover:scale-105 transition-transform"
                        >
                            <div className="relative w-full max-w-xs h-auto">
                                <Image
                                    src={item.src}
                                    alt={`Depoimento ${index + 1}`}
                                    width={400}
                                    height={400}
                                    className="object-contain w-full h-auto rounded-md"
                                />
                            </div>
                        </a>
                    ))}
                </div>

                {/* Botão do WhatsApp */}
                <div className="mt-12">
                    <a
                        href="https://wa.me/5599999999999?text=Oi Teacher Mi! Vi os depoimentos e quero saber mais sobre suas aulas de inglês!"
                        target="_blank"
                        className="text-white bg-[#3533CD] font-semibold flex items-center gap-2 px-6 py-3 rounded-full justify-center mx-auto w-fit hover:bg-blue-700 transition"
                    >
                        <FaWhatsapp size={24} />
                        Fale com a Teacher Mi
                    </a>
                </div>
            </div>
        </section>
    );
}
