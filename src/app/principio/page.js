import Link from "next/link";
import { FiPlay } from "react-icons/fi";
import {RiArrowGoBackFill} from "react-icons/ri"

export default function Principio() {
    return (
        <div className='bg-gradient-to-tr from-blue-600 from-30% via-blue-400 via-65% to-purple-400 flex-col'>
            <div className=' min-w-screen min-h-screen bg-no-repeat bg-right-bottom bg-none bg-25 md:bg-sammy p-4'>
                <h1 className='text-white font-bold text-6xl text-center mb-8'>Principios</h1>
                <div className="flex justify-center items-center">
                    <ul className='flex flex-col gap-6 p-6 max-w-xl'>
                        <li className='text-white font-normal text-md flex items-center gap-4'><span className='text-purple-600 text-2xl'>⬡</span> A habilidade de programar vai além domínio da linguagem de
                            programação: necessita do aprendizado de outras habilidades básicas
                            que convêm ser estimuladas desde cedo.</li>
                        <li className='text-white font-normal text-md flex items-center gap-4'><span className='text-purple-600 text-2xl'>⬡</span> Processualidade e continuidade: cada aprendizado é indispensável para
                            os desenvolvimentos seguintes.</li>
                        <li className='text-white font-normal text-md flex items-center gap-4'><span className='text-purple-600 text-2xl'>⬡</span> Metodologias ativas: materiais lúdicos, objetos de aprendizagem,
                            atividades manuais.</li>
                        <li className='text-white font-normal text-md flex items-center gap-4'><span className='text-purple-600 text-2xl'>⬡</span> Consciência social e política: precisamos interiorizar desde cedo o
                            sentido do bem comum e a importância da participação nos processos
                            de tomada de decisão.</li>
                    </ul>
                </div>
                <div className="flex gap-32 items-center justify-center mt-10">
                    <Link href='/about' className="flex gap-2 items-center justify-center bg-purple-400 p-3 w-42 rounded text-white font-bold hover:bg-purple-600 opacity-60 hover:opacity-100 transition w-32">Back<RiArrowGoBackFill /></Link>
                    <Link href='/integralidade' className="flex gap-2 items-center justify-center bg-purple-400 p-3 w-42 rounded text-white font-bold hover:bg-purple-600 transition w-32">Next<FiPlay /></Link>
                </div>
            </div>
        </div>
    );
}