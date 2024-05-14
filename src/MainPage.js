import './App.css'
import { useState } from 'react';
import { Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import nav from "./nav.png"
import vk from "./vk_logo.png"
import tg from "./tg_logo.png"
import yt from "./yt_logo.png"
import fb from "./fb_logo.png"
import icon1 from "./icon1.png"
import icon1_active from "./icon1_active.png"
import icon2 from "./icon2.png"
import icon2_active from "./icon2_active.png"
import icon3 from "./icon3.png"
import icon3_active from "./icon3_active.png"
import par_classic from "./par_image3.png"
import par_tandem from "./par_image1.png"
import par_sport from "./par_image2.png"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SocialBlock = ({ network, icon, features }) => (
    <div className="w-[25%] text-1xl flex flex-col border solid px-[10px] mx-[5px] h-[400px] bg-white rounded shadow-md">
      <div className="flex justify-center"><img src={icon} className="w-[100px] m-[20px]"></img></div>
      {features.map((feature, index) => (
        <a key={index} className="pt-[20px] ">{feature}</a>
      ))}
    </div>
);

const socialNetworks = [
    {
      network: 'ВКонтакте',
      icon: vk,
      features: ['Посты, новости', 'Эксклюзивные акции', 'Обсуждение любой темы']
    },
    {
      network: 'Telegram',
      icon: tg,
      features: ['Посты, новости', 'Быстрый ответ модерации', 'Частые розыгрыши']
    },
    {
      network: 'YouTube',
      icon: yt,
      features: ['Примеры услуг', 'Разнообразный контент', 'Открытые комментарии']
    },
    {
      network: 'Facebook',
      icon: fb,
      features: ['Новости', 'Ответы на вопросы', 'Все ваши предложения']
    }
];

let butMain = "shadow-lg shadow-violet-500/50 absolute top-[640px] py-[30px] px-[80px] left-[17%] text-3xl font-[350] border-violetmain border-4 justify-center hover:opacity-80"
let h1main = "flex text-5xl w-[100%] pt-[150px] pb-[50px] justify-center got-bold"

function MainPage(){
    return(
      <div>
        <Header />
        <First />
        <Popular />
        <Connection />
        <FeedbackSlider />
        <Footer />
      </div>
    )
}

function First(){
    return(
        <div className="h-[900px]">
            <div className="w-[100%] h-[880px]  absolute top-[90px] -z-10 bg-[url(./main-back.PNG)] bg-no-repeat bg-cover bg-center">
            </div>
            <div className="absolute inset-x-0 top-[390px] h-16 w-[29%] left-[15%] text-5xl got-hard text-violetmain">ТО САМОЕ, ЧТО ВЫ ДАВНО ХОТЕЛИ</div>
            <Link to="/CatalogPage">
              <button type="button" className={butMain}>
                Записаться
              </button>
            </Link>
        </div>
    )
}

function Popular(){
    return(
        <div>
            <h1 className={h1main}>Популярное</h1>
            <div className="justify-center flex ">
                <IconSlider />
            </div>
        </div>
    )
}

function IconSlider() {
    const [activeIcon, setActiveIcon] = useState(null);
  
    const handleIconClick = (icon) => {
      if (activeIcon === icon) {
        setActiveIcon(null);
      } else {
        setActiveIcon(icon);
      }
    };
  
    return (
      <div>
        <div className="flex">
          <div className="icon" onClick={() => handleIconClick("icon1")}>
            <img src={activeIcon === "icon1" ? icon1_active : icon1} alt="Icon 1" style={{ width: '100px', marginRight: '150px', cursor: 'pointer'}}/>
          </div>
          <div className="icon" onClick={() => handleIconClick("icon2")}>
            <img src={activeIcon === "icon2" ? icon2_active : icon2} alt="Icon 2" style={{ width: '100px', marginInline: '50px', cursor: 'pointer' }}/>
          </div>
          <div className="icon" onClick={() => handleIconClick("icon3")}>
            <img src={activeIcon === "icon3" ? icon3_active : icon3} alt="Icon 3" style={{ width: '100px', marginLeft: '150px', cursor: 'pointer' }}/>
          </div>
        </div>
  

        {activeIcon && (
          <div className="slider">
            {activeIcon === "icon1" && (
              // Парашют
              <div className='mb-[350px]'>
                <div className="flex justify-between w-[60%] absolute left-[20%]">
                  <img src={par_classic} alt="Классический" className="w-[28%] h-[350px] relative object-cover transition-transform transform hover:scale-110 " />
                  <div className='absolute left-10 bottom-6 text-3xl got-hard text-white'>Классический</div>
                  <img src={par_sport} alt="Спортивный" className="w-[28%] h-[350px] object-cover transition-transform transform hover:scale-110" />
                  <div className='absolute left-[41%] bottom-6 text-3xl got-hard text-white'>Спортивный</div>
                  <img src={par_tandem} alt="В тандеме" className="w-[28%] h-[350px] object-cover transition-transform transform hover:scale-110" />
                  <div className='absolute left-[78%] bottom-6 text-3xl got-hard text-white'>В тандеме</div>
                </div>
              </div>
            )}
            {activeIcon === "icon2" && (
              // Дайвинг
              <div className='mb-[350px]'>
                <div className="flex justify-between w-[60%] absolute left-[20%]">
                  <img src="https://sportishka.com/uploads/posts/2022-03/1648046542_60-sportishka-com-p-daiver-v-more-turizm-krasivo-foto-69.jpg" alt="в море" className="relative w-[28%] h-[350px] object-cover transition-transform transform hover:scale-110 " />
                  <div className='absolute left-10 bottom-6 text-3xl got-hard text-white'>Открытое море</div>
                  <img src="https://sun9-49.userapi.com/impg/iI6MwGVIvb9PejDO8_SM8VpxPm2mLTTrvJddrQ/lxeoYyHXMX4.jpg?size=1080x1080&quality=96&sign=a441fbe35056147517b0aa46a056363c&c_uniq_tag=BMoAoqi5MZqhJZVRj_ipvaD2W9G6i7h9if4tCVeznmI&type=album" alt="бассейн" className="w-[28%] object-cover h-[350px] transition-transform transform hover:scale-110" />
                  <div className='absolute left-[45%] bottom-6 text-3xl got-hard text-white'>Бассейн</div>
                  <img src="https://arena-swim.ru/wp-content/uploads/9/7/d/97d5cb35faa9d6cbe2f7685c46527ff3.jpeg" alt="Обучающий" className="w-[28%] h-[350px] object-cover transition-transform transform hover:scale-110" />
                  <div className='absolute left-[78%] bottom-6 text-3xl got-hard text-white'>Обучающий</div>
                </div>
              </div>
            )}
            {activeIcon === "icon3" && (
              // Фотостудия
              <div className='mb-[350px]'>
                  <div className="flex justify-between w-[60%] absolute left-[20%]">
                  <img src="https://mykaleidoscope.ru/uploads/posts/2020-02/1582133080_50-p-krasivie-intereri-fotostudii-91.jpg" alt="Индивидуальный в студии" className="w-[28%] h-[350px] object-cover transition-transform transform hover:scale-110 " />
                  <div className='absolute left-10 bottom-6 text-3xl got-hard text-white'>В студии</div>
                  <img src="https://kinodeloff.ru/wp-content/uploads/2020/01/operator.jpg" alt="Для мероприятия" className="w-[28%] h-[350px] object-cover transition-transform transform hover:scale-110" />
                  <div className='absolute left-[38%] bottom-6 text-3xl got-hard text-white'>На мероприятия</div>
                  <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/11/22/11/chuck-maroon-bells-1.jpg" alt="Индивидуальный на выезд" className="w-[28%] h-[350px] object-cover transition-transform transform hover:scale-110" />
                  <div className='absolute left-[78%] bottom-6 text-3xl got-hard text-white'>На выезд</div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
}

function Connection() {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className='mb-8'>
      <h1 className={h1main}>Связь с нами</h1>
      <div className="tabs flex justify-center">
        <nav className="tabs_items flex flex-col mt-[0px] text-3xl">
          <div className={`tabs_item h-[100px] z-10 w-[300px] items-center justify-center flex cursor-pointer border mt-[0px] hover:text-[32px] ${activeTab === 'tab1' ? 'text-violetmain' : 'text-gray-800'}`} onClick={() => handleTabClick('tab1')}>Наш офис</div>
          <div className={`tabs_item h-[100px] z-10 w-[300px] items-center justify-center flex cursor-pointer border mt-[40px] hover:text-[32px] ${activeTab === 'tab2' ? 'text-violetmain' : 'text-gray-800'}`} onClick={() => handleTabClick('tab2')}>Социальные сети</div>
          <div className={`tabs_item h-[100px] z-10 w-[300px] items-center justify-center flex cursor-pointer border mt-[40px] hover:text-[32px] ${activeTab === 'tab3' ? 'text-violetmain' : 'text-gray-800'}`} onClick={() => handleTabClick('tab3')}>Оставить сообщение</div>
          <div className={`tabs_item h-[100px] z-10 w-[300px] items-center justify-center flex cursor-pointer border mt-[40px] hover:text-[32px] ${activeTab === 'tab4' ? 'text-violetmain' : 'text-gray-800'}`} onClick={() => handleTabClick('tab4')}>Служба поддержки</div>
        </nav>
        <div className="tabs_body w-[50%] relative">
          <div className={`${activeTab === 'tab1' ? 'block' : 'hidden'} flex flex-row border solid pl-[20px] h-[520px]`}>
                  <div className="flex  flex-row  pl-[20px] w-[100%] h-[520px] text-3xl">
                      <div className="w-[350px] flex flex-col ">
                          <a className=" mt-[40px] py-[20px] bg-white px-[20px] ">Адрес нашего офиса:</a>
                          <a className=" pb-[40px] bg-white px-[20px]">Киришская улица, 2, Санкт-Петербург, 195299.</a>
                          <a className=" h-[100%] bg-white px-[20px] mb-[40px]">Рядом метро: Гражданский проспект</a>
                      </div>
                      <div className="w-60% flex items-center bg-white my-[40px]">
                          <img src={nav} className="w-[500px] "></img>
                      </div>
                  </div>
          </div>

          <div className={`${activeTab === 'tab2' ? 'block' : 'hidden'} flex flex-col border solid pl-[20px] w-[100%] h-[520px]`}>
            <div className="flex flex-col px-[20px] w-[100%] h-[520px]">
              <a className="text-3xl m-[20px]">Наша активность в социальных сетях:</a>
              <div className="flex flex-row justify-around text-2xl">
                {socialNetworks.map((social, index) => (
                <   SocialBlock key={index} {...social} />
                ))}
              </div>
            </div>
          </div>

          <div className={`${activeTab === 'tab3' ? 'block' : 'hidden'} flex flex-row pl-[20px] w-[100%] h-[520px]`}>
            <ErrorBlock />
          </div>

          <div className={`${activeTab === 'tab4' ? 'block' : 'hidden'} flex flex-row pl-[20px] w-[100%] h-[520px]`}>
            <FeedbackForm />
          </div>
        </div>
      </div>
    </div>
  )
}


function ErrorBlock() {
    return (
      <div className="w-[90%] h-[90%] m-[20px] bg-white rounded p-8 shadow-md text-2xl">
        <div className="mb-4">
          <p className="text-gray-700 mb-2">Если у вас возникли проблемы по поводу нашего сайта или услуги, пожалуйста,
          обратитесь <a href="https://vk.com/budshirokimkakputin" className="text-violetmain">сюда</a>.</p>
        </div>
        <div className="mt-4">
          <p className="text-gray-700">Также вы можете просмотреть частые вопросы и ответы на них 
          в нашем сборнике: <a href="/NotFound" className="text-violetmain">FAQ</a>.</p>
        </div>
      </div>
    );
}
  
function FeedbackForm() {
    return (
      <div className="w-[80%] mx-auto bg-white rounded p-8 shadow-md ">
        <h2 className="text-2xl mb-6">Оставьте сообщение нам через форму, если вы ещё не зарегестрировались.</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Ваше имя</label>
            <input type="text" id="name" name="name" className="form-input w-full px-4 py-2 border rounded-md focus:outline-none focus:border-violetmain" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Ваша почта</label>
            <input type="email" id="email" name="email" className="form-input w-full px-4 py-2 border rounded-md focus:outline-none focus:border-violetmain" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Сообщение</label>
            <textarea id="message" name="message" rows="4" className="form-textarea w-full h-[80px] px-4 py-2 border rounded-md focus:outline-none focus:border-violetmain"></textarea>
          </div>
          <button type="submit" className="bg-white border text-black px-4 py-2 rounded-md hover:text-white hover:bg-violetmain">Отправить</button>
        </form>
      </div>
    );
}

const FeedbackSlider = () => {
  const testimonials = [
    {
      name: 'Иван Петров',
      date: '10 марта 2024',
      rating: 5,
      message: 'Как-то мне посоветовали библиотеки, что предлагает этот сайт. Что-то, а их набрали очень приятных. Амтосфера, дружелюбный персонал и комфортные места для чтения на ряду с огромным выбором книг. Но потом я из интереса решил просмотреть сайт полушче и увидел столько интересных услуг, самых разных. Как только мои родственники заговорили про семейную фотосессию, сразу в голвое всплыло, что здесь было и подобное, поэтому мы записались тут. Впечатления остались исключительно положительные!',
      imageUrl: 'https://avatars.mds.yandex.net/i?id=be24c26340350a6beb3ff7eb8a7478cbbc45ed66-12441729-images-thumbs&n=13',
    },
    {
      name: 'Анна Иванова',
      date: '5 апреля 2024',
      rating: 5,
      message: 'Мне очень понравились возможности, которые даёт регистрация на сайте! Вместе с регситрацией открывается множество полезных и удобных функций. Как пользователь я могу смотреть историю всех моих бронирований ровно по порядку дат, что помогает мне смотреть и вспоминать то, что я уже прошла. К тому же, как приятный бонус появляется огромное количество различных акций и скидок. Всё это делает сайт очень удобным, а бронирование новых услуг приятным.',
      imageUrl: 'https://avatars.mds.yandex.net/i?id=587b4865777e2dece32e0b22299bcb60ff22475d-12510920-images-thumbs&n=13',
    },
    {
      name: 'Степа Бризлюков',
      date: '20 апреля 2024',
      rating: 4,
      message: 'Услуги, которые предлагает сайт очень хорошие, но мне, как дизайнеру, иногда чего-то не хватает в оформлении. Казалось, можно было сделать и лучше.',
      imageUrl: 'https://nztcdn.com/avatar/l/1708017697/7978136.webp',
    },
  ];

  const NextArrowSlider = ({ onClick }) => (
    <button className="absolute top-1/2 right-[5%] transform -translate-y-1/2 bg-white rounded-full p-2 z-10 " onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-violetmain" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );

  const PrevArrowSlider = ({ onClick }) => (
    <button className="absolute top-1/2 left-[5%] transform -translate-y-1/2 bg-white rounded-full p-2 z-10" onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-violetmain" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrowSlider />,
    prevArrow: <PrevArrowSlider />,
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push('★');
    }
    for (let i = rating; i < 5; i++) {
      stars.push('☆');
    }
    return stars.join('');
  };

  return (
    <div>
      <div className={h1main}> Отзывы</div>
      <Slider {...settings} className='h-[500px] mb-[100px]'>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <div className="flex justify-center h-[500px]">
              <div className="w-3/4 bg-white rounded-lg shadow-md h-[480px] p-6">
                <div className="flex items-center mb-4">
                  <img src={testimonial.imageUrl} className="w-[100px] h-[100px] object-cover rounded-full mx-[50px]" alt="Фото пользователя" />
                  <div>
                    <h3 className="text-3xl got-hard">{testimonial.name}</h3>
                    <p className="text-gray-600 text-2xl got-light">{testimonial.date}</p>
                  </div>
                  <div className="ml-auto text-yellow-500 text-4xl pr-[50px]">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                <p className="text-gray-700 m-[50px] text-2xl">{testimonial.message}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};


export default MainPage