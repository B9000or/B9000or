import user from "./user.png"
import heart from "./heart.png"

const links = [

    {
        text: "Главная",
        url: "/",
    },
    {
        text: "О нас",
        url: "/about",
    },
    {
        text: "Каталог",
        url: "/catalog",
    },
    {
        text: "Блог",
        url: "/Blog",
    },

];


function Header() {
    const linksJsx = links.map((elem, i) => {
        return <Link text={elem.text} url={elem.url} key={i} />
    });
    linksJsx.push( 
        <a href="/favourites" className="min-w-[70px] min-h-[70px] justify-self-center">
            <img src={heart} className="w-[69px] hover:w-[70px] " alt="fav"/>
        </a>
    );
    linksJsx.push( 
        <a href="/user" className="min-w-[70px] min-h-[70px] ">
            <img src={user} className="w-[69px] hover:w-[70px] " alt="user" />
        </a>
    );
    return (
        <header className="header-h z-20">
            <nav className="flex justify-around py-2 text-3xl ">
                {linksJsx}
            </nav>
        </header>
    );
}

function Link({text, url}) {
    return (
        <a className="text-black hover:text-violetmain self-center" href={url}>{text}</a>
    );
}

export default Header;