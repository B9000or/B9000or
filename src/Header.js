import user from "./user.png"
import { Link } from "react-router-dom";

const links = [

    {
        text: "Главная",
        url: "/",
    },
    {
        text: "О нас",
        url: "/AboutPage",
    },
    {
        text: "Каталог",
        url: "/CatalogPage",
    },
    {
        text: "Блог",
        url: "/BlogPage",
    },

];


function Header() {
    const linksJsx = links.map((elem, i) => {
        return <LinkLink text={elem.text} url={elem.url} key={i} />
    });

    linksJsx.push( 
        <Link to="/RegPage">
            <a className="min-w-[70px] min-h-[70px] ">
                <img src={user} className="w-[69px] hover:w-[70px] " alt="user" />
            </a>
        </Link>
    );
    return (
            <header className="header-h z-20">
                <nav className="flex justify-around py-2 text-2xl mx-[10%]">
                    {linksJsx}
                </nav>
            </header>
    );
}

function LinkLink({text, url}) {
    return (
        <Link to={url} className="text-black hover:text-violetmain self-center">
            <a  href={url}>{text}</a>
        </Link>
    );
}

export default Header;