const links = [
    {
        text: "Logo",
        url: "/",
    },
    {
        text: "Главная",
        url: "/",
    },
    {
    },
    {
        text: "Контакты",
        url: "/contacts",
    },
    {
        text: "О нас",
        url: "/about",
    },
    {
        text: "Корзина",
        url: "/liked",
    },

];


function Header() {
    const linksJsx = links.map((elem, i) => {
        return <Link text={elem.text} url={elem.url} key={i} />
    });
    return (
        <header>
            <nav className=" flex justify-around align-middle py-2 ">
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