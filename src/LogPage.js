import { Link } from "react-router-dom";
import image from "./logo-mini.png"

function LogPage() {
    return (
      <div>
        <div />
        <LogBlank />
        
      </div>
    );
  }

function LogBlank(){
    return(
        <div className="flex flex-col justify-center items-center py-[200px] gap-4 ">
            <div className='relative w-[400px]'>
                <Link to='/'>
                    <img src={image} alt='logo' className="absolute w-[50px] object-cover rounded-md mb-2 left-0" />
                </Link>
            </div>
            <div className="text-violetmain font-bold text-2xl">
                ВХОД
            </div>

            <div className="gap-6">
                <form className="flex flex-col gap-2">
                    <input type="email" className="p-4 w-96 border focus:outline-none focus:ring focus:ring-violetmain bg-white rounded-lg" placeholder="Электронный адрес" />
                    <input type="password" className="p-4 w-96 border focus:outline-none focus:ring focus:ring-violetmain bg-white rounded-lg" placeholder="Пароль" />
                </form>
                <div className="flex text-black justify-end">
                    <Link to="/">
                        Я забыл пароль
                    </Link>
                </div>
            </div>
            <div className="flex justify-center">
                <button className="w-64 p-4 border border-solid border-black rounded-lg 
                    hover:bg-violetmain hover:text-white hover:border-transparent hover:ease-in-out duration-300">
                    <Link to="/">
                        Войти
                    </Link>
                </button>
            </div>
            <div className="flex flex-col justify-center items-center">
                Если у вас ещё нет учётной записи, то вы можете
                <div className="text-violetmain">
                    <Link to="/">
                        зарегистрироваться
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LogPage;