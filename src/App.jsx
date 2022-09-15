import Calculadora from './components/calculadora.jsx';
import Footer from './components/Footer.jsx';
import DarkMode from './components/DarkMode.jsx';

export default function App() {
    return (
        <div className='font-mono h-auto min-h-screen flex flex-col items-center w-full bg-sky-600 justify-center dark:bg-slate-500 ease-linear duration-300 dark:text-cyan-50 sm:w-auto'>
            <DarkMode/>
            <Calculadora/>
            <Footer/>
        </div>
    )
}