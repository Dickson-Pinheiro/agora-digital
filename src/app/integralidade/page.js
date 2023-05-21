import Link from "next/link";
import { FiPlay } from "react-icons/fi";
import {RiArrowGoBackFill} from "react-icons/ri"

export default function Integralidade() {
    return (
        <div className='bg-gradient-to-tr from-blue-600 from-30% via-blue-400 via-65% to-purple-400 flex-col'>
            <div className=' min-w-screen min-h-screen bg-no-repeat bg-bottom-4 md:bg-bottom-5 bg-40 bg-sammy p-4'>
                <h1 className='text-white font-bold text-5xl text-center mb-8'>Integralidade</h1>
                <div className="flex items-center justify-center mt-8">
                    <p className='text-center font-medium text-white text-xl max-w-xl'>A competência cognitiva e a
                        competência ética, e todas as
                        habilidades atreladas, devem ser
                        consideradas de modo integral, uma
                        influindo sobre a outra na formação
                        de uma personalidade criativa e
                        politicamente atuante.</p>
                </div>
                <div className="flex gap-32 items-center justify-center mt-60 p-2">
                    <Link href='/principio' className="flex gap-2 items-center justify-center bg-purple-400 p-3 w-42 rounded text-white font-bold hover:bg-purple-600 opacity-60 hover:opacity-100 transition w-32">Back<RiArrowGoBackFill /></Link>
                    <Link href='/niveis' className="flex gap-2 items-center justify-center bg-purple-400 p-3 w-42 rounded text-white font-bold hover:bg-purple-600 transition w-32">Next<FiPlay /></Link>
                </div>
            </div>
        </div>
    );
}