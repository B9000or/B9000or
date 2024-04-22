import logo from "./logo.png"
import { Link } from "react-router-dom";

const myaw = "text-black hover:text-violetmain text-xl h-[50px]"

function Footer() {
    return (
      <footer className="bg-[#C0C0C0] py-8 h-[250px]">
        <div className="flex justify-around items-center flex-row px-[15%]">
          <div className="text-start flex flex-col">
            <a className={myaw}>8 (800) 535 35-35</a>
            <a className={myaw}>pochta@mail.ru</a>
            <a href="/about" className={myaw}>Больше связи</a>
          </div>
          <div className=" flex flex-col">
            <Link to="/CatalogPage" className={myaw}>
              <a>Перейти в каталог</a>
            </Link>
            <a href="/partners" className={myaw}>Список партнёров</a>
            <a href="/ps" className={myaw}>Пользовательское соглашение</a>
          </div>
          <div>
          <Link to="/">
            <img src={logo} alt="Логотип" className="m-0" style={{ maxWidth: '200px' }} />
          </Link>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-600">&copy; {new Date().getFullYear()} Все права не защищены</p>
        </div>
      </footer>
    );
}

export default Footer;