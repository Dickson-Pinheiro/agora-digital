import Link from "next/link";

export default function LevelDois() {
    return (
        <div className='bg-gradient-to-tr from-blue-600 from-30% via-blue-400 via-65% to-purple-400 flex-col'>
            <div className='min-w-screen min-h-screen p-4'>

                <h1 className='text-white font-bold text-5xl text-center mb-8'>Nível Dois</h1>
                <div className="flex gap-6 justify-center items-center flex-wrap mt-8">
                    <div className="w-80 h-[28rem] bg-black rounded-lg p-6 flex flex-col items-center">
                        <h1 className="mb-10 font-semibold text-4xl bg-gradient-to-tr text-transparent bg-clip-text from-blue-600 from-30% via-blue-400 via-55% to-purple-400">Fase Um</h1>
                        <p className="text-center font-semibold text-xl bg-gradient-to-tr text-transparent bg-clip-text from-blue-600 from-30% via-blue-400 via-55% to-purple-400">
                            Do 6º ao 7º ano: incentivo
                            das habilidades do
                            pensamento computacional
                            e desenvolvimento do
                            ensino da programação.
                        </p>
                    </div>
                    <div className="w-80 h-[28rem] bg-black rounded-lg p-6 flex flex-col items-center">
                        <h1 className="mb-10 font-semibold text-4xl bg-gradient-to-tr text-transparent bg-clip-text from-blue-600 from-30% via-blue-400 via-55% to-purple-400">Fase Dois</h1>
                        <p className="text-center font-semibold text-xl bg-gradient-to-tr text-transparent bg-clip-text from-blue-600 from-30% via-blue-400 via-55% to-purple-400">
                            Do 8º ao 9º ano: são
                            incentivados a pensar em
                            questões de ordem ética e
                            política e a desenvolverem
                            pequenos projetos no nível
                            escolar.
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