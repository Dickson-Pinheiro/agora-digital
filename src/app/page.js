import { FiPlay } from "react-icons/fi";
import Link from "next/link";
export default function Home() {
  return (
    <div className='flex items-center justify-center flex-col gap-4 h-screen w-screen bg-gradient-to-tr from-blue-600 from-30% via-blue-400 via-65% to-purple-400 to-75'>
      <div className='bg-sammy bg-no-repeat bg-right-bottom bg-40 md:bg-25 min-h-screen min-w-full flex justify-center items-center flex-col'>
        <h1 className='text-white font-bold text-4xl'>Ágora Digital</h1>
        <p className="text-white text-sm mb-4">Conheça melhor nosso itinerário formativo</p>
      <Link href='about' className="flex gap-2 items-center justify-center bg-purple-400 p-3 w-42 rounded text-white font-bold hover:bg-purple-600 transition">Getting started <FiPlay /></Link>
      </div>
    </div>
  )
}
