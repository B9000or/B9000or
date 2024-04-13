import logo from "./logo.png"

const myaw = "text-black hover:text-blue-700 text-xl p-[10px]"

function Footer() {
    return (
      <footer className="bg-[#C0C0C0] py-8 ">
        <div className="flex justify-around flex-row px-[15%]">
          <div className="text-start flex flex-col ">
            <a className={myaw}>8 (800) 535 35-35</a>
            <a className={myaw}>pochta@mail.ru</a>
            <a href="/about" className={myaw}>Больше связи</a>
          </div>
          <div className="text-stat flex flex-col">
            <a href="/catalog" className={myaw}>Перейти в каталог</a>
            <a href="/partners" className={myaw}>Список партнёров</a>
            <a href="/ps" className={myaw}>Пользовательское соглашение</a>
          </div>
          <div>
            <img src={logo} alt="Логотип" className="m-0" style={{ maxWidth: '200px' }} />
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-600">&copy; {new Date().getFullYear()} Все права не защищены</p>
        </div>
      </footer>
    );
}

export default Footer;