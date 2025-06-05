// components/FAQ.tsx

export default function FAQ() {
    const faqs = [
        {
            question: "Quanto tempo leva pra aprender inglês com imersão?",
            answer:
                "Depende do seu ritmo e dedicação, mas com consistência, os resultados aparecem muito mais rápido do que com métodos tradicionais.",
        },
        {
            question: "Preciso saber algo de inglês antes de começar?",
            answer:
                "Não! As aulas são personalizadas desde o zero absoluto até níveis avançados.",
        },
        {
            question: "Tem material incluso nas aulas?",
            answer:
                "Sim! A Teacher Mi fornece todo o conteúdo necessário, incluindo PDFs, áudios e recomendações de séries e livros.",
        },
        {
            question: "As aulas são online ou presenciais?",
            answer:
                "As aulas são totalmente online, com foco em conforto e flexibilidade pra você aprender de onde quiser.",
        },
    ];

    return (
        <section className="w-full bg-slate-200 text-[#3533CD] px-4 py-16">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-800">
                    Dúvidas Frequentes
                </h2>

                <div className="space-y-6 mb-12">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
                        >
                            <h3 className="text-lg md:text-xl font-semibold text-[#3533CD] mb-2">
                                {faq.question}
                            </h3>
                            <p className="text-base text-blue-900">{faq.answer}</p>
                        </div>
                    ))}
                </div>

                {/* Botão do WhatsApp */}
                <div className="text-center">
                    <a
                        href="https://wa.me/5599999999999?text=Oi Teacher Mi! Vi as dúvidas frequentes e quero saber mais sobre as aulas."
                        target="_blank"
                        className="bg-[#3533CD] text-white font-semibold flex items-center gap-2 px-6 py-3 rounded-full justify-center mx-auto w-fit hover:bg-blue-700 transition"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 0C5.371 0 0 5.371 0 12c0 2.122.555 4.13 1.61 5.931L0 24l6.224-1.582C8.061 23.442 9.994 24 12 24c6.629 0 12-5.371 12-12S18.629 0 12 0zm0 22c-1.798 0-3.537-.523-5.045-1.509l-.363-.23-3.691.938.982-3.594-.236-.372C2.651 15.451 2 13.76 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.295-7.509c-.293-.147-1.732-.856-2-0.953-.267-.098-.463-.147-.66.147-.196.294-.757.953-.93 1.147-.172.196-.343.221-.635.074-.293-.147-1.236-.456-2.356-1.457-.87-.777-1.457-1.734-1.63-2.027-.172-.294-.018-.454.13-.6.133-.132.293-.343.44-.514.147-.172.196-.294.293-.49.098-.196.049-.368-.025-.515-.074-.147-.66-1.586-.904-2.17-.237-.569-.478-.49-.66-.5-.172-.007-.368-.009-.564-.009s-.515.074-.785.368c-.27.294-1.027 1.005-1.027 2.45 0 1.446 1.052 2.844 1.198 3.041.147.196 2.072 3.165 5.023 4.435.702.302 1.248.483 1.674.619.702.223 1.34.191 1.846.116.563-.084 1.732-.708 1.979-1.393.245-.684.245-1.271.171-1.393-.073-.123-.27-.196-.563-.343z" />
                        </svg>
                        Fale com a Teacher Mi
                    </a>
                </div>
            </div>
        </section>
    );
}
