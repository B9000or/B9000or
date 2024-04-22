import './App.css';
import Header from './Header';
import Footer from './Footer';
import Slider from 'react-slick';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function CatalogPage() {
    return (
        <div>
            <Header />
            <SliderTop />
            <SportCatalog />
            <ThemselfCatalog />
            <NewExpCatalog />
            <TheLastOnCatalog />
            <Footer />
        </div>
    );
}


function SportCatalog() {
    const products = [
        { id: 11, path: '/OthersPage', image: 'https://foxtime.ru/wp-content/uploads/2020/08/pexels-jess-loiterton-4318913.jpg', description: 'Сёрфинг', price: 'от 2900 руб' },
        { id: 12, path: '/OthersPage', image: 'https://ozernyi-sochi.ru/wp-content/uploads/d/1/2/d124ccbc2fa91438d3e5c0734d57cebe.jpeg', description: 'Рафтинг', price: 'от 2900 руб' },
        { id: 13, path: '/OthersPage', image: 'https://static.vecteezy.com/system/resources/previews/000/159/335/large_2x/rappelling-silhouette-vector-pack.jpg', description: 'Спортивный туризм', price: 'от 2600 руб' },
        { id: 14, path: '/OthersPage', image: 'https://windowman.ru/wp-content/uploads/a/e/3/ae39af9fdfaa0919fe75cfca3516e263.jpeg', description: 'Горнолыжный', price: 'от 2700 руб' },
        { id: 15, path: '/OthersPage', image: 'https://i.pinimg.com/originals/6b/ca/2b/6bca2b52e171b05024e03b377698c177.jpg', description: 'Велопрогулка', price: 'от 1900 руб' },
        { id: 16, path: '/OthersPage', image: 'https://i.ytimg.com/vi/uXIltQwpi30/maxresdefault.jpg', description: 'Полоса препятствий', price: '3100' },
        { id: 17, path: '/OthersPage', image: 'https://i.pinimg.com/originals/f9/76/5c/f9765cde3407f50596a05a87a64bdd71.jpg', description: 'Вейкбординг', price: 'от 5900 руб' },
        { id: 18, path: '/ParashoutPage', image: 'http://businesseventscairns.org.au/wp-content/uploads/2018/12/Skydive_0004.jpg', description: 'Прыжок с парашютом', price: 'от 6500 руб' },
    ];
  
    return (
        <div className="my-[100px]" >
            <div className=" container mx-auto p-4 flex items-center relative">
                <div className=" h-[4px] w-[30%] left-[-20%] absolute border-2 border-violetmain" />
                <h1 className="text-4xl ml-[10%]">Спортивный отдых</h1>
            </div>
            <div className="container mx-auto p-4">
                <p className="text-lg mb-8 ml-[10%]">Активное времяпрепровождение с пользой.</p>
                <div className="grid grid-cols-4 gap-4">
                    {products.map((product, index) => (
                    <Product key={index} {...product} />
                    ))}
                </div>
            </div>
      </div>
    );
}

function ThemselfCatalog() {
    const products = [
        { id: 21, path: '/OthersPage', image: 'https://avatars.mds.yandex.net/get-altay/1899727/2a0000016ae31395c746367df98a0c840a8b/XXL', description: 'Библиотека', price: 'от 480 руб' },
        { id: 22, path: '/FotoStudioPage', image: 'https://make-up-course.ru/wp-content/uploads/a/2/e/a2eb6660e96016a849c15307e3a9c61e.jpeg', description: 'Фотосессия', price: 'от 3900 руб' },
        { id: 23, path: '/OthersPage', image: 'https://image.jimcdn.com/app/cms/image/transf/none/path/sca526629308d9e55/image/ic88f7d076cb03851/version/1445763112/image.png', description: 'Гид по магазинам', price: 'от 1500 руб' },
        { id: 24, path: '/OthersPage', image: 'https://scanmagazine.co.uk/content/uploads/2019/09/LEGO-House-image-4_Masterpiece-Gallery_Credit-LEGO-House.jpg', description: 'Мир конструктора', price: 'от 2800 руб' },
    ];
  
    return (
        <div className="my-[100px]" >
            <div className=" container mx-auto p-4 flex items-center relative">
                <div className=" h-[4px] w-[30%] left-[-20%] absolute border-2 border-violetmain" />
                <h1 className="text-4xl ml-[10%]">Время для себя</h1>
            </div>
            <div className="container mx-auto p-4">
                <p className="text-lg mb-8 ml-[10%]">Для тех, кто находит себя в своих увлечениях и расширяет их.</p>
            <div className="grid grid-cols-4 gap-4">
                {products.map((product, index) => (
                  <Product key={index} {...product} />
                ))}
            </div>
        </div>
      </div>
    );
}

function NewExpCatalog() {
    const products = [
        { id: 31, path: '/DaivingPage', image: 'https://avatars.mds.yandex.net/i?id=d540525ed1b62edd6cc2be3e62c817ecbb144d4f-12817767-images-thumbs&n=13', description: 'Дайвинг', price: 'от 3700 руб' },
        { id: 32, path: '/OthersPage', image: 'https://avatars.mds.yandex.net/i?id=fa84c033ff2534e95b76b0a210fdf480f22062ec-10157084-images-thumbs&n=13', description: 'Квесты', price: 'от 2400 руб' },
        { id: 33, path: '/OthersPage', image: 'https://avatars.mds.yandex.net/i?id=6837b3a01588bd3aef5026dfa91db4757b73e199-10576628-images-thumbs&n=13', description: 'Замок грёз', price: 'от 6700 руб' },
        { id: 34, path: '/OthersPage', image: 'https://avatars.mds.yandex.net/i?id=928a9079b38737dd5702e0f1a81c5e587b1c395e-11444350-images-thumbs&n=13', description: 'Воздушный шар', price: 'от 480 руб' },
    ];
  
    return (
        <div className="my-[100px]" >
            <div className=" container mx-auto p-4 flex items-center relative">
                <div className=" h-[4px] w-[30%] left-[-20%] absolute border-2 border-violetmain" />
                <h1 className="text-4xl ml-[10%]">Получение нового опыта</h1>
            </div>
            <div className="container mx-auto p-4">
                <p className="text-lg mb-8 ml-[10%]">Расширение мировоззрения и получение незабываемых, новых ощущений.</p>
            <div className="grid grid-cols-4 gap-4">
                {products.map((product, index) => (
                  <Product key={index} {...product} />
                ))}
            </div>
        </div>
      </div>
    );
}

function TheLastOnCatalog(){
    return(
        <div className="flex items-center justify-center h-[400px] bg-cover bg-[url('./catalogLast.jpg')] bg-center">
            <div className="max-w-2xl text-center p-8">
                <p className="text-lg mb-4">На данный момент это все предоставляемые услуги. 
                Со временем мы будем расширять список и добавлять всё больше нового.</p>
                <p className="text-lg mb-4">Вы можете вернуться <ScrollToTop /> или проверить <TookToTheBlog /> с новостями, 
                если вы не нашли ничего для себя. Может, то самое для вас уже в наших планах?</p>
                
            </div>
      </div>
    )
}

function Product({ id, path, image, description, price }) {
    // let PopaOO = <div className='absolute hidden' />;
    // if (id == 18 || id == 22 || id == 31){
    //     PopaOO = (
    //         <div className=
    //         'absolute h-[50px] w-[50px] z-10 bg-black right-0 top-0'
    //         />
    //     )
    // }
    return (
        <div className=" p-4 flex flex-col items-center content-center justify-center relative h-[300px]">
            {/* {PopaOO} */}
            <Link to={path}>
                <img src={image} alt={description} className="w-[200px] h-[200px] object-cover rounded-md mb-2" />
                <h2 className="text-lg font-semibold mb-2">{description}</h2>
                <p className="text-sm text-gray-600">Цена: {price}</p>
            </Link>
        </div>
    );
}

function ScrollToTop() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button onClick={scrollToTop} className="text-violetmain">в начало страницы</button>
    );
}

function TookToTheBlog() {
    return (
        <Link to={"/AboutPage"}>
            <button className="text-violetmain">наш блог</button>
        </Link>
    );
}

function SliderTop() {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 6000
    };
    
    return (
    <div>
        <Slider {...settings} className="mb-[100px] w-[100%]">
            <div>
                <img src="https://sun9-86.userapi.com/impg/9qxSVhg6mBDYyKKlMuQ2aKDBhl_UIyisXlbmTg/I4sjloaTTxw.jpg?size=1280x318&quality=95&sign=92449158aafe05b96978073866e418c2&c_uniq_tag=TsCWZqiJK2gncOre9eN11WRq0-GQqxhmngJn9vvqXpE&type=album"
                alt="Изображение 1" 
                className="h-[400px] object-cover w-[100%]" />
            </div>
            <div>
                <img src="https://sun9-14.userapi.com/impg/-j6c-PFBQOy5Va85Yl3LfWWz1CzgtwDz1bvf8A/EityFT20sgM.jpg?size=807x454&quality=95&sign=0e8cd9717183e353eff5f5439e5a8de4&c_uniq_tag=h1vieqvonOv83ebyXAVzxun9m_7m1OYQASUxD32N-x4&type=album" 
                alt="Изображение 2" 
                className="w-[100%] h-[400px] object-cover" />
            </div>
            <div>
                <img src="https://klincollege.ru/klncllgAssets/images/news/news/2024/04/wuhhxrwcshw-1.jpg" 
                alt="Изображение 3" 
                className="w-[100%] h-[400px] object-cover" />
            </div>
        </Slider>
    </div>
  );
}


export default CatalogPage;