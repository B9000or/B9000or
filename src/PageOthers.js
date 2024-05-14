import './App.css';
import Header from './Header';
import Footer from './Footer';
import Slider from 'react-slick';
import { Link } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import colleg from "./2sotr.png";
import location_1 from "./1loc.png";
import location_2 from "./2loc.png";
import location_3 from "./3loc.png";

function OthersPage(){
    return(
        <div>
            <Header />
            <StartInfo/>
            <Banner />
            <InfoBlock />
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
                    <h1 className='text-4xl mb-8 got-black'>
                        Спортивный туризм
                    </h1>
                    <h3 className='text-xl text-[#CACACA] mb-8 got-light'>
                        от 2600 рублей
                    </h3>
                    <ScrollToMap />
                    <h2 className='text-2xl mt-8'>
                        Описание
                    </h2>
                    <div className=" h-[1px] w-[30%] left-[-20%] border-[1px] border-violetmain" />
                    <a className='w-[70%] mb-8 text-xl'>
                    Спортивный туризм — это возможность совместить активный отдых на свежем воздухе с природной красотой и азартом приключений. 
                    Вне зависимости от уровня подготовки и предпочтений, каждый найдет для себя что-то увлекательное и стимулирующее. Наши 
                    профессиональные инструкторы и гиды обеспечат безопасность и комфорт во время всего путешествия, а живописные места, в 
                    которых мы проводим наши туры, оставят незабываемые впечатления и вдохновят на новые спортивные достижения.
                    </a>
                    <Link to="/CatalogPage">
                        <button type="button" className='got-bold shadow-lg shadow-violet-500/50 py-[15px] px-[50px] text-xl font-[350] border-violetmain border-4 justify-center hover:opacity-80'>
                            Записаться
                        </button>
                    </Link>
                </div>
            </div>
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
            top: 1300,
            behavior: 'smooth'
        });
    };

    return (
        <button onClick={ScrollToMap} className="bg-[#F6CEF2] h-[60px] w-[200px] text-xl flex justify-center items-center hover:opacity-80">Места на картах</button>
    );
}

function Banner(){
    return (
      <div className="flex justify-center h-[500px]">
        <div className="w-3/4 bg-gray-200 rounded-[50px] overflow-hidden flex">
          <div className="w-3/5 p-8 pl-[100px]">
            <h2 className="text-4xl font-bold mb-8">Специалист по спортивному туризму</h2>
            <p className="text-3xl py-8 got-light text-gray-800">Я с детства занимался спортивным туризмом, поэтому мой опыт сильно помогает нашей команде 
            с проведением всяких мероприятий, подготовкой, с техникой безопасности и многое другое. </p>
            <p className="text-3xl pt-[90px] text-gray-600">Опыт работы: 19 лет</p>
          </div>
          <div className="w-2/5">
            <img
              className="object-cover h-[500px] w-full "
              src={colleg}
              alt="Изображение"
            />
          </div>
        </div>
      </div>
    );
};

function InfoBlock(){
    // Состояние для хранения выбранного варианта
    const [selectedOption, setSelectedOption] = useState(1);
  
    // Данные для каждого варианта
    const options = [
      {
        title: 'Вариант расположения: 1',
        image: location_1,
        text: 'Эльбрус',
      },
      {
        title: 'Вариант расположения: 2',
        image: location_2,
        text: 'Горы Алтая',
      },
      {
        title: 'Вариант расположения: 3',
        image: location_3,
        text: 'Специальные комплексы в Ростове-на-Дону',
      },
    ];
  
    return (
        <div>
            <div className='flex justify-center text-5xl pt-[100px]'>Варианты местоположения </div>
            <div className="w-3/5 mx-auto my-8">
                {/* Верхняя часть блока для выбора варианта */}
                <div className="flex justify-between mb-4">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className={`cursor-pointer p-2 border ${
                            selectedOption === index ? 'border-violetmain' : 'border-gray-300'
                            } rounded text-2xl got-light`}
                            onClick={() => setSelectedOption(index)}
                            >
                            {option.title}
                        </div>
                    ))}
                </div>
                {/* Нижняя часть блока с информацией */}
                <div className="border border-gray-300 rounded p-4">
                    <p className="text-center text-3xl">{options[selectedOption].text}</p>
                    <img className="w-[80%] h-[400px] object-cover mx-auto my-4" src={options[selectedOption].image} alt="Изображение" />
                    {/* <img className="w-[80%] h-[400px] object-cover mx-auto mb-4" src={location_1} alt="Изображение" /> */}
                </div>
            </div>
        </div>
    );
};  


export default OthersPage