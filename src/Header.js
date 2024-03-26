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
        <img src={heart} className="h-16"/>
    );
    linksJsx.push( 
        <img src={user} className="h-16"/>
    );
    return (
        <header>
            <nav className="flex justify-around align-items-center py-2 text-2xl ">
                {linksJsx}
            </nav>
        </header>
    );
}

function Link({text, url}) {
    return (
        <a className="text-black hover:text-[#99CC99]" href={url}>{text}</a>
    );
}

export default Header;