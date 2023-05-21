import Link from "next/link";

export default function Niveis() {
    return (
        <div className='bg-gradient-to-tr from-blue-600 from-30% via-blue-400 via-65% to-purple-400 flex-col'>
            <div className='min-w-screen min-h-screen bg-cover bg-no-repeat bg-left-bottom p-4'>
                <h1 className='text-white font-bold text-6xl text-center mb-8'>Niveis</h1>
                <div className="flex gap-6 justify-center items-center flex-wrap mt-8">
                    <div className="w-80 h-[32rem] bg-black rounded-lg p-6 flex flex-col items-center justify-between">
                        <h1 className="mb-8 font-semibold text-4xl bg-gradient-to-tr text-transparent bg-clip-text from-blue-600 from-30% via-blue-400 via-55% to-purple-400">Nível Um</h1>
                        <p className="text-center font-semibold text-xl bg-gradient-to-tr text-transparent bg-clip-text from-blue-600 from-30% via-blue-400 via-55% to-purple-400">Para as crianças do 1º
                            ao 5º ano. As atividades
                            são voltadas para o
                            desenvolvimento de
                            habilidades básicas de
                            análise e para o
                            desenvolvimento da
                            expressão.</p>
                        <Link href='' className="flex gap-2 items-center justify-center bg-purple-400 p-3 w-42 rounded text-white font-bold hover:bg-purple-600 transition w-32">Conhecer</Link>
                    </div>
                    <div className="w-80 h-[32rem] bg-black rounded-lg p-6 flex flex-col items-center justify-between">
                        <h1 className="mb-8 font-semibold text-4xl bg-gradient-to-tr text-transparent bg-clip-text from-blue-600 from-30% via-blue-400 via-55% to-purple-400">Nível Dois</h1>
                        <p className="text-center font-semibold text-xl bg-gradient-to-tr text-transparent bg-clip-text from-blue-600 from-30% via-blue-400 via-55% to-purple-400">Para crianças do 6º ao
                            9º ano. Oferecem-se
                            aqui os fundamentos da
                            programação e
                            incentiva-se a busca por
                            solução de problemas
                            comuns do dia-a-dia.</p>
                        <Link href='' className="flex gap-2 items-center justify-center bg-purple-400 p-3 w-42 rounded text-white font-bold hover:bg-purple-600 transition w-32">Conhecer</Link>
                    </div>
                    <div className="w-80 h-[32rem] bg-black rounded-lg p-6 flex flex-col items-center justify-between">
                        <h1 className="mb-8 font-semibold text-4xl bg-gradient-to-tr text-transparent bg-clip-text from-blue-600 from-30% via-blue-400 via-55% to-purple-400">Nível Três</h1>
                        <p className="text-center font-semibold text-xl bg-gradient-to-tr text-transparent bg-clip-text from-blue-600 from-30% via-blue-400 via-55% to-purple-400">Para os alunos do Ensino
                            Médio. Eles são
                            incentivados a
                            desenvolverem
                            capacidade de análise
                            social e a desenvolverem
                            a programação de forma
                            aplicada.</p>
                        <Link href='' className="flex gap-2 items-center justify-center bg-purple-400 p-3 w-42 rounded text-white font-bold hover:bg-purple-600 transition w-32">Conhecer</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}