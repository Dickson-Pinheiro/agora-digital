import Link from "next/link";
import { FiPlay } from "react-icons/fi";
import {RiArrowGoBackFill} from "react-icons/ri"


export default function About() {
  return (
    <div className='bg-gradient-to-tr from-blue-600 from-30% via-blue-400 via-65% to-purple-400 flex-col'>
      <div className=' min-w-screen min-h-screen bg-no-repeat bg-right-bottom bg-none bg-25 md:bg-sammy p-4'>
        <h1 className='text-white font-bold text-6xl text-center mb-8'>About us</h1>
        <div className='flex flex-col mt-4 justify-center items-center gap-8'>
          <div className='flex flex-col justify-around max-w-lg'>
            <h2 className='text-white font-bold text-2xl text-right'>Quem somos</h2>
            <p className='text-md text-white p-2 text-right'>Somos uma organização sem fins
              lucrativos que exerce atividade junto à
              sociedade civil e representações
              políticas, visando o incentivo e o
              fomento da educação digital.</p>
          </div>
          <div className='flex flex-col justify-around max-w-lg mr-20'>
            <h2 className='text-white font-bold text-2xl'>A Ágora Digital oferece…</h2>
            <p className='text-md text-white text-left p-2'>
              Suporte integral na implementação de um itinerário formativo
              junto ao ensino escolar. 
              Esse itinerário abarca toda a formação
              básica da criança e do jovem, porque entendemos que as
              competências cognitivas e éticas só podem ser formadas de
              modo satisfatório em um processo gradual e contínuo.</p>
          </div>
        </div>
        <div className="flex gap-32 items-center justify-center mt-10">
        <Link href='/' className="flex gap-2 items-center justify-center bg-purple-400 p-3 w-42 rounded text-white font-bold hover:bg-purple-600 opacity-60 hover:opacity-100 transition w-32">Back<RiArrowGoBackFill/></Link>
        <Link href='/principio' className="flex gap-2 items-center justify-center bg-purple-400 p-3 w-42 rounded text-white font-bold hover:bg-purple-600 transition w-32">Next<FiPlay /></Link>
        </div>
      </div>
    </div>
  )
}