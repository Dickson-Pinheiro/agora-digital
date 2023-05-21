import Link from "next/link";

export default function LevelUm() {
    return (
        <div className='bg-gradient-to-tr from-blue-600 from-30% via-blue-400 via-65% to-purple-400 flex-col'>
            <div className='min-w-screen min-h-screen p-4'>

                <h1 className='text-white font-bold text-5xl text-center mb-8'>Nivel Um</h1>
                <div className="flex items-center justify-center font-semibold mb-10">
                    <p className="text-lg max-w-4xl text-center text-white">Entendemos que é importante, nesse nível,
                        trabalhar com a solução de pequenos problemas,
                        além de incentivar a troca de ideias entre as
                        crianças, estimulando o uso da linguagem, a fim de
                        que encontrem, de forma coletiva e cooperativa,
                        soluções para as situações apresentadas.</p>
                </div>
                <div className="flex gap-6 justify-center items-center flex-wrap mt-8">
                    <div className="w-80 h-[24rem] bg-black rounded-lg p-6 flex flex-col items-center">
                        <h1 className="mb-10 font-semibold text-4xl bg-gradient-to-tr text-transparent bg-clip-text from-blue-600 from-30% via-blue-400 via-55% to-purple-400">Fase Um</h1>
                        <p className="text-center font-semibold text-xl bg-gradient-to-tr text-transparent bg-clip-text from-blue-600 from-30% via-blue-400 via-55% to-purple-400">
                            Do 1º ao 2º ano: análise de
                            atributos simples e
                            refinamento da expressão.
                            Material principal: Blocos
                            lógicos (Dienes 1979;
                            Simons 2011)
                        </p>
                    </div>
                    <div className="w-80 h-[24rem] bg-black rounded-lg p-6 flex flex-col items-center">
                        <h1 className="mb-10 font-semibold text-4xl bg-gradient-to-tr text-transparent bg-clip-text from-blue-600 from-30% via-blue-400 via-55% to-purple-400">Fase Dois</h1>
                        <p className="text-center font-semibold text-xl bg-gradient-to-tr text-transparent bg-clip-text from-blue-600 from-30% via-blue-400 via-55% to-purple-400">
                            Do 3º ao 5º ano.
                            Aperfeiçoamento da
                            análise e da expressão.
                            Materiais diversos: jogos,
                            programação desplugada,
                            intro em linguagem de
                            programação.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center items-center mt-8">
                <Link href='/niveis' className="flex gap-2 items-center justify-center bg-purple-400 p-3 w-42 rounded text-white font-bold hover:bg-purple-600 transition w-32">niveis</Link>
                </div>
            </div>
        </div>
    );
}