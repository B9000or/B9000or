import './App.css';
import image from "./logo-mini.png"
import { Link } from "react-router-dom";

function RegPage() {
  return (
    <div>
      <div />
      <RegBlank />
    </div>
  );
}

function RegBlank(){
    return(
        <div className="flex flex-col justify-center items-center py-[150px] gap-4 ">
            <div className='relative w-[400px]'>
                <Link to='/'>
                    <img src={image} alt='logo' className="absolute w-[50px] object-cover rounded-md mb-2 left-0" />
                </Link>
            </div>
            <div className="text-violetmain font-bold text-2xl">
                РЕГИСТРАЦИЯ
            </div>
            <div className="gap-6">
                <form className="flex flex-col gap-2">
                    <div className="flex flex-row gap-2">
                        <input type="text" className="p-4 w-[188px] border bg-white rounded-lg focus:outline-none focus:ring focus:ring-violetmain" placeholder="Имя" />
                        <input type="text" className="p-4 w-[188px] border bg-white rounded-lg focus:outline-none focus:ring focus:ring-violetmain" placeholder="Фамилия" />
                    </div>
                    <input type="email" className="p-4 w-96 border bg-white rounded-lg focus:outline-none focus:ring focus:ring-violetmain" placeholder="Электронный адрес" />
                    <input type="password" className="p-4 w-96 border bg-white rounded-lg focus:outline-none focus:ring focus:ring-violetmain" placeholder="Пароль" />
                    <input type="password" className="p-4 w-96 border bg-white rounded-lg focus:outline-none focus:ring focus:ring-violetmain" placeholder="Повторите пароль" />
                </form>
            </div>
            <div className="flex flex-col justify-center items-center text-xs pl-1 text-[rgb(40,41,44)]">
                <div className="flex flex-row gap-1">
                    <input type="checkbox" className="p-4"/>
                    Я согласен  с 
                    <Link to="/" className='text-violetmain text-xs'>условиями</Link>
                    и
                    <Link to="/" className='text-violetmain'>политикой конфиденциальности</Link>
                </div>
            </div>
            <div className="flex justify-center">
                <button className="w-[100%] p-4 border border-solid border-black rounded-lg 
                    hover:bg-violetmain hover:text-white hover:border-transparent hover:ease-in-out duration-300">
                    <Link to="/">
                        Зарегистрироваться
                    </Link>
                </button>
            </div>
            <div className="flex flex-col justify-center items-center">
                Если у вас уже есть учётная запись, то вы можете
                <div className="text-violetmain">
                    <Link to="/LogPage">
                        войти
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default RegPage