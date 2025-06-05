// components/About.tsx

import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function About() {
    return (
        <section className="w-full px-4 py-16 bg-white text-[#3533CD]">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                
                {/* Imagem com efeito de scale */}
                <div className="w-full md:w-1/2 overflow-hidden rounded-xl shadow-lg">
                    <Image 
                        src="/leny.webp" // <-- substitua pelo nome da imagem que você tiver no public
                        alt="Foto da professora Mi"
                        width={600}
                        height={600}
                        className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-110"
                    />
                </div>

                {/* Texto + botão */}
                <div className="w-full md:w-1/2 flex flex-col gap-6 justify-center items-center">
                    <h2 className="text-3xl md:text-4xl font-bold">Hello my future students,</h2>
                    <p className="text-lg leading-relaxed">
                        Eu sou a <strong>Teacher Mi</strong>, ensino inglês há 6 anos e me sinto realizada em acompanhar a evolução dos meus alunos. Valorizo muito a comunicação nas aulas, porque uma língua é, acima de tudo, uma ferramenta de conexão.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Aprendi inglês ainda criança, morei um ano na Califórnia durante o ensino médio, estudei na escola de inglês por imersão EZspeak e fiz um estágio na França onde me comunicava em inglês. Além disso, já viajei bastante e continuo a usar o idioma no dia a dia — inclusive com meu namorado holandês!
                    </p>

                    <a 
                        target="_blank"
                        href={"https://wa.me/5599999999999?text=Oi Teacher Mi! Vi seu site e quero saber mais sobre as aulas de inglês por imersão."}
                        className="bg-[#3533CD] text-white font-semibold flex items-center gap-2 w-fit px-6 py-3 rounded-full hover:bg-blue-700 transition">
                        <FaWhatsapp size={24} />
                        Fale com a Teacher Mi
                    </a>
                </div>
            </div>
        </section>
    );
}
