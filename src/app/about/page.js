import { FiPlay } from "react-icons/fi";

export default function About() {
  return (
   <div className='flex items-center p-4 flex-col h-screen w-screen bg-gradient-to-tr from-blue-600 from-30% via-blue-400 via-65% to-purple-400 to-75'>
    <div className="">
    <h1 className='text-white text-center font-bold text-6xl mb-6'>About us</h1>
    <p className="text-white text-lg max-w-2xl text-justify leading-6 mb-6">Somos uma organização sem fins
lucrativos que exerce atividade junto à
sociedade civil e representações
políticas, visando o incentivo e o
fomento da educação digital.</p>
    <h2 className="text-white font-bold text-2xl mb-2">A Ágora Digital oferece…</h2>
    <p className="text-white text-lg max-w-2xl text-justify leading-6">
    Suporte integral na implementação de um itinerário formativo
junto ao ensino escolar. Esse itinerário abarca toda a formação
básica da criança e do jovem, porque entendemos que as
competências cognitivas e éticas só podem ser formadas de
modo satisfatório em um processo gradual e contínuo.
    </p>
   </div>
   </div>
  )
}