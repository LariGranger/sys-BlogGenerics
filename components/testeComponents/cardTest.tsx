
import Image from 'next/image'
export default function Teste(){
    return(
            <div className='bg-amber-300 min-w-120 max-w-120 max-h-100'>
                
                <div className=" min-w-120 max-w-98 min-h-68 max-h-98 rounded-2xl bg-center bg-[url('/bgmovie.png')]">
       

                </div>

                <div className='relative bg-white min-w-98 max-w-98 min-h-56 max-h-98 mx-auto my-0 -top-24 rounded-2xl text-amber-900 opacity-50 z-50'>
                <p className='text-3xl'>25 · fev · 2025</p>
                <h2>Oppenheimer</h2>
                <p>Filme sobre o fisico oppenheimer criador da <br />
bomba atomica na epoca da segunda guerra
mundial no mundo. </p>

                </div>
            </div>
    )
}