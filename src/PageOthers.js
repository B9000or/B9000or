import './App.css';
import Header from './Header';
import Footer from './Footer';
import Slider from 'react-slick';
import Photo from './primep.png';
import { Link } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function OthersPage(){
    return(
        <div>
            <Header />
            <StartInfo/>
            <div className='h-[1000px]' />
            <Footer />
        </div>
    )

}

function StartInfo(){
    return(
        <div>
            <div className='flex flex-row my-[100px] pl-[15%]'>
                <SliderImg />
                <div className='flex flex-col w-full pl-[5%]'>
                    <h1 className='text-4xl mb-8'>
                        Спортивный туризм
                    </h1>
                    <h3 className='text-xl text-[#CACACA] mb-8'>
                        от 2600 рублей
                    </h3>
                    <ScrollToMap />
                    <h2 className='text-2xl mt-8'>
                        Описание
                    </h2>
                    <div className=" h-[1px] w-[30%] left-[-20%] border-[1px] border-violetmain" />
                    <a className='w-[70%] mb-8 '>
                    Спортивный туризм — это возможность совместить активный отдых на свежем воздухе с природной красотой и азартом приключений. 
                    Вне зависимости от уровня подготовки и предпочтений, каждый найдет для себя что-то увлекательное и стимулирующее. Наши 
                    профессиональные инструкторы и гиды обеспечат безопасность и комфорт во время всего путешествия, а живописные места, в 
                    которых мы проводим наши туры, оставят незабываемые впечатления и вдохновят на новые спортивные достижения.
                    </a>
                    <Link to="/CatalogPage">
                        <button type="button" className='shadow-lg shadow-violet-500/50 py-[15px] px-[50px] text-xl font-[350] border-violetmain border-4 justify-center hover:opacity-80'>
                            Записаться
                        </button>
                    </Link>
                </div>
               
            </div>
            {/* <div className="px-[15%] bg-[url(./ob.png)]"> */}
            <div className="px-[15%]">
                <img src={Photo} className='w-full '/>
            </div>
            <div className='h-[200px] w-[200px] ' />

        </div>
    )
}

function SliderImg() {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 6000
    };
    
    return (
    <div className='w-[500px]'>
        <Slider {...settings} className=" w-[500px] h-[500px]">
            <div>
                <img src="https://turizm.pibig.info/uploads/posts/2023-05/1683570754_turizm-pibig-info-p-yargu-turizm-turizm-pinterest-50.jpg"
                alt="Изображение 1" 
                className="object-cover w-[500px] h-[500px]" />
            </div>
            <div>
                <img src="https://turizm.pibig.info/uploads/posts/2023-04/1682029000_turizm-pibig-info-p-verevka-turisticheskaya-turizm-instagram-60.jpg" 
                alt="Изображение 2" 
                className="object-cover w-[500px] h-[500px]" />
            </div>
            <div>
                <img src="https://sportishka.com/uploads/posts/2022-03/1646087416_18-sportishka-com-p-sportivnii-turizm-turizm-krasivo-foto-23.jpg" 
                alt="Изображение 3" 
                className="object-cover w-[500px] h-[500px]" />
            </div>
        </Slider>
    </div>
  );
}

function ScrollToMap() {
    const ScrollToMap = () => {
        window.scrollTo({
            top: 1200,
            behavior: 'smooth'
        });
    };

    return (
        <button onClick={ScrollToMap} className="bg-[#F6CEF2] h-[60px] w-[200px] text-xl flex justify-center items-center hover:opacity-80">Места на картах</button>
    );
}

export default OthersPage