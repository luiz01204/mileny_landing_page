// components/Services.tsx

import { FaUserGraduate, FaUsers, FaComments, FaWhatsapp } from "react-icons/fa";

export default function Services() {
    const services = [
        {
            title: "Aulas Particulares",
            description:
                "Acompanhamento individual para acelerar seu aprendizado com foco nas suas necessidades.",
            icon: <FaUserGraduate size={40} className="text-[#3533CD]" />,
            message: "Oi Teacher Mi! Tenho interesse nas aulas particulares de inglês.",
        },
        {
            title: "Aulas em Grupo",
            description:
                "Turmas pequenas, dinâmicas e com muita interação pra aprender junto e se divertir.",
            icon: <FaUsers size={40} className="text-[#3533CD]" />,
            message: "Oi Teacher Mi! Gostaria de saber mais sobre as aulas em grupo.",
        },
        {
            title: "Conversação",
            description:
                "Foco total em conversação pra você destravar seu inglês de forma natural e confiante.",
            icon: <FaComments size={40} className="text-[#3533CD]" />,
            message: "Oi Teacher Mi! Quero melhorar minha conversação em inglês.",
        },
    ];

    return (
        <section className="w-full px-4 py-16 bg-slate-200 text-[#3533CD]">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">Meus Serviços</h2>

                <div className="grid gap-10 md:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center h-full"
                        >
                            <div className="mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-base mb-4">{service.description}</p>

                            {/* Espaço flexível pra empurrar o botão pra base */}
                            <div className="flex-grow" />

                            <a
                                target="_blank"
                                href={`https://wa.me/5599999999999?text=${encodeURIComponent(service.message)}`}
                                className="bg-[#3533CD] text-white font-semibold flex items-center gap-2 px-4 py-2 rounded-full hover:bg-blue-700 transition"
                            >
                                <FaWhatsapp size={20} />
                                Fale sobre {service.title}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
