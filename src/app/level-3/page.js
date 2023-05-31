import Link from "next/link";

export default function LevelTres() {
    return (
        <div className='bg-gradient-to-tr from-blue-600 from-30% via-blue-400 via-65% to-purple-400 flex-col'>
            <div className=' min-w-screen min-h-screen bg-no-repeat bg-bottom-4 md:bg-bottom-5 bg-40 bg-sammy p-4'>
                <h1 className='text-white font-bold text-5xl text-center mb-8'>Nível Três</h1>
                <div className="flex items-center justify-center mt-8">
                    <p className='text-center font-medium text-white text-xl max-w-4xl'>
                        O principal, nesse nível, é o incentivo para o
                        desenvolvimento de respostas criativas para as
                        demandas mais urgentes. Os alunos são
                        estimulados, com o apoio da comunidade escolar, a
                        criar pontes entre as comunidades a que pertencem
                        e os representates públicos. Juntamente com o
                        Ágora Digital, são incentivados a participarem de
                        projetos que envolvem diversas equipes em prol da
                        melhoria do serviço público em sua cidade.
                    </p>
                </div>
                <div className="flex gap-32 items-center justify-center mt-80 p-2">
                    <Link href='/niveis' className="flex gap-2 items-center justify-center bg-purple-400 p-3 w-42 rounded text-white font-bold hover:bg-purple-600 transition w-32">niveis</Link>
                </div>
            </div>
        </div>
    );
}