import React ,{ useEffect , useState} from 'react';

export default function DarkMode() {
  const [Theme,setTheme] = useState();
  let resultado = localStorage.getItem('theme');

  useEffect(() =>{
    if(resultado === 'dark'){
      setTheme(true)
    }else{
      setTheme(false)
    }
  },[])

  useEffect(() =>{
    if(Theme){
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark')
    }else{
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark')
    }
  },[Theme])

  function dark(){ 
    if(Theme){
      setTheme(false)
    }else{
      setTheme(true)
    }
  }

  return (
    <div className='p-7'>
        <button onClick={()=> {dark()}} className='text-lg'>{Theme ? '🌙' : '☀️' }</button>
    </div>
  )
}