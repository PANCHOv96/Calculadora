import { useState } from "react"
import calcular from '../functions/calcular.js'

export default function Calculadora(){
    const [cadenaNumero, setCadenaNumero] = useState('0');
    const [clear, setClear] = useState(true);
    
    function handler(value){
        if(clear === true){
            setCadenaNumero(value)
            setClear(false)
        }else{
            setCadenaNumero(`${cadenaNumero}${value}`)
        }
    }

    function handlerClear(){
        setCadenaNumero('0')
        setClear(true)
    }

    function handlerTotal(){
        setCadenaNumero(calcular(cadenaNumero.toString()));
        setClear(true)
    }

    return(
        <div className="p-1 w-full sm:w-auto">
            <div className="bg-blue-50 dark:bg-gray-300 border-gray-900 shadow-2xl rounded-lg ease-linear duration-300">
                <form className="bg-gray-700 rounded-t-lg shadow-md w-auto">
                    <input type="string" disabled className="bg-transparent p-8 rounded-t-lg outline-none focus:bg-gray-700 text-4xl text-right text-gray-200 font-mono w-full" value={cadenaNumero}/>
                </form>
                <div className="p-6 text-gray-800 grid grid-cols-4 gap-4 text-xl">
                    <button className="font-mono bg-rose-200 hover:bg-rose-400 dark:bg-rose-400 dark:hover:bg-rose-500	dark:text-white ease-linear duration-300 rounded-md p-5" onClick={(e)=> handlerClear()} value='Clear'>C</button>
                    <button className="font-mono bg-blue-200 hover:bg-blue-400 rounded-md p-5" onClick={(e)=> handler(e.target.value)} value='('>(</button>
                    <button className="font-mono bg-blue-200 hover:bg-blue-400 rounded-md p-5" onClick={(e)=> handler(e.target.value)} value=')'>)</button>
                    <button className="font-mono bg-yellow-100  hover:bg-yellow-200 rounded-md p-5" onClick={(e)=> handler(e.target.value)} value='/'>/</button>

                    <button className="font-mono bg-zinc-200 hover:bg-zinc-400 rounded-md p-5" onClick={(e)=> handler(e.target.value)} value='7'>7</button>
                    <button className="font-mono bg-zinc-200 hover:bg-zinc-400 rounded-md p-5" onClick={(e)=> handler(e.target.value)} value='8'>8</button>
                    <button className="font-mono bg-zinc-200 hover:bg-zinc-400 rounded-md p-5" onClick={(e)=> handler(e.target.value)} value='9'>9</button>
                    <button className="font-mono bg-yellow-100  hover:bg-yellow-200 rounded-md p-5" onClick={(e)=> handler(e.target.value)} value='*'>*</button>

                    <button className="font-mono bg-zinc-200 hover:bg-zinc-400 rounded-md p-5" onClick={(e)=> handler(e.target.value)} value='4'>4</button>
                    <button className="font-mono bg-zinc-200 hover:bg-zinc-400 rounded-md p-5" onClick={(e)=> handler(e.target.value)} value='5'>5</button>
                    <button className="font-mono bg-zinc-200 hover:bg-zinc-400 rounded-md p-5" onClick={(e)=> handler(e.target.value)} value='6'>6</button>
                    <button className="font-mono bg-yellow-100  hover:bg-yellow-200 rounded-md p-5" onClick={(e)=> handler(e.target.value)} value='-'>-</button>

                    <button className="font-mono bg-zinc-200 hover:bg-zinc-400 rounded-md p-5" onClick={(e)=> handler(e.target.value)} value='1'>1</button>
                    <button className="font-mono bg-zinc-200 hover:bg-zinc-400 rounded-md p-5" onClick={(e)=> handler(e.target.value)} value='2'>2</button>
                    <button className="font-mono bg-zinc-200 hover:bg-zinc-400 rounded-md p-5" onClick={(e)=> handler(e.target.value)} value='3'>3</button>
                    <button className="font-mono bg-yellow-100 hover:bg-yellow-200 rounded-md p-5" onClick={(e)=> handler(e.target.value)} value='+'>+</button>

                    <button className="font-mono bg-zinc-200 hover:bg-zinc-400 rounded-md p-5" onClick={(e)=> handler(e.target.value)} value='0'>0</button>
                    <button className="font-mono bg-blue-200 hover:bg-blue-400 rounded-md p-5" onClick={(e)=> handler(e.target.value)} value='.'>.</button>
                    <button className="font-mono col-span-2 bg-rose-400 dark:bg-rose-500 dark:text-white rounded-md p-5 shadow-2xl" onClick={()=> handlerTotal()} value='='>=</button>
                </div>
            </div>
        </div>
    )
}