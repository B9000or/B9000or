import './App.css';
import { Link } from "react-router-dom";

function NotFound(){
    return(
        <div className='flex justify-center text-3xl'>
            <div className='flex flex-col'>
                <a className='mt-[300px]'>
                    Кажется, вы попали на несуществующую страницу!
                </a>
                <Link to={"/"} className='mt-[50px] flex justify-center'>
                    <a className='text-violetmain hover:text-[#7f7f77]'>
                        ===    Вернуться на главную    === 
                    </a>
                </Link>
            </div>

        </div>
    )
}

export default NotFound