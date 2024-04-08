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
import React, { useState } from 'react';
import './App.css'
import par_classic from "./par_image3.png"
import par_tandem from "./par_image1.png"
import par_sport from "./par_image2.png"


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
const images = [
    {
      image: {par_classic},
      alt: 'par_classic',
      text: 'Классический',
    },
    {
      image: {par_tandem},
      alt: 'par_tandem',
      text: 'Прыжок в тандеме',
    },
    {
      image: {par_sport},
      alt: 'par_sport',
      text: 'Спортивный',
    },
    // Добавьте нужное количество объектов для каждого изображения в слайдере
  ];  

let butMain = "shadow-lg shadow-violet-500/50 absolute top-[640px] py-[30px] px-[80px] left-[17%] text-3xl font-[350] border-violetmain border-4 justify-center hover:opacity-80"

let h1main = "flex text-4xl w-[100%] py-[100px] justify-center"

function Main(){
    return(
        <div>
            <First />
            <Popular />
            <Connection />
        </div>
    )
}

function First(){
    return(
        <div className="h-[900px]">
            <div className="w-[100%] h-[880px]  absolute top-[90px] -z-10 bg-[url(./main-back.PNG)] bg-no-repeat bg-cover bg-center">
            </div>
            <div className="absolute inset-x-0 top-[390px] h-16 w-[29%] left-[15%] text-5xl text-violetmain">ТО САМОЕ, ЧТО ВЫ ДАВНО ХОТЕЛИ</div>
            <button type="button" className={butMain}>
                Записаться
            </button>
        </div>
    )
}

function Popular(){
    return(
        <div>
            <h1 className={h1main}>Популярное</h1>
            <div className="justify-center flex">
                <IconSlider />
            </div>
        </div>
    )
}

function HorizontalSlider() {
    const [activeIndex, setActiveIndex] = useState(0); // Состояние для активного индекса
  
    const handleSlideChange = (index) => {
      setActiveIndex(index); // Обновляем активный индекс при смене слайда
    };
  
    return (
      <div className="slider-container">
        <div className="slider">
          {/* Маппим изображения и текст */}
          {images.map((item, index) => (
            <div
              key={index}
              className={`slide ${index === activeIndex ? 'active' : ''}`}
              onClick={() => handleSlideChange(index)}
            >
              <img src={item.image} alt={item.alt} />
              <div className="text">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

function Connection(){
    return(
        <div>
            <h1 className={h1main}>Связь с нами</h1>
            <div className="tabs flex justify-center">
                <nav className="tabs_items flex flex-col mt-[0px]">
                    <a href="#tab1" className="tabs_item h-[100px] z-10 w-[300px] items-center justify-center flex text-2xl border solid mt-[0px]">Наш офис</a>
                    <a href="#tab2" className="tabs_item h-[100px] z-10 w-[300px] items-center justify-center flex text-2xl border solid mt-[40px]">Социальные сети</a>
                    <a href="#tab3" className="tabs_item h-[100px] z-10 w-[300px] items-center justify-center flex text-2xl border solid mt-[40px]">Оставить отзыв</a>
                    <a href="#tab4" className="tabs_item h-[100px] z-10 w-[300px] items-center justify-center flex text-2xl border solid mt-[40px]">Служба поддержки</a>
                </nav>
                <div className="tabs_body w-[50%] relative">
                    {/* <div id="\" className="w-[100%] h-[520px] bg-black flex absolute top-0 hidden target:block"></div> */}
                    <div id="tab1" className="tabs_block target:flex target:bg-slate-100 target:flex-row border solid hidden pl-[20px] w-[100%] h-[520px]">
                        <div className="w-[350px] flex flex-col ">
                            <a className="text-2xl mt-[40px] py-[20px] bg-white px-[20px]">Адрес нашего офиса:</a>
                            <a className="text-2xl pb-[40px] bg-white px-[20px]">Киришская улица, 2, Санкт-Петербург, 195299.</a>
                            <a className="text-2xl h-[100%] bg-white px-[20px] mb-[40px]">Рядом метро: Гражданский проспект</a>
                        </div>
                        <div className="w-60% flex items-center bg-white my-[40px]">
                            <img src={nav} className="w-[500px] "></img>
                        </div>
                        <div className="h-[100px] w-[300px] absolute bg-slate-100 z-1 left-[-300px] top-0"></div>
                    </div>

                    <div id="tab2" className="tabs_block target:flex target:bg-slate-100 target:flex-col border solid hidden px-[20px] w-[100%] h-[520px]">
                        <a className="text-2xl m-[20px]">Наша активность в социальных сетях:</a>
                        <div className="flex flex-row justify-around ">
                            {socialNetworks.map((social, index) => (
                            <   SocialBlock key={index} {...social} />
                            ))}
                        </div>
                        <div className="h-[100px] w-[300px] absolute bg-slate-100 z-1 left-[-300px] top-[140px]"></div>
                    </div>

                    <div id="tab3" className="tabs_block target:flex target:bg-white target:flex-row hidden pl-[20px] w-[100%] h-[520px]">
                        <FeedbackForm />
                        <div className="h-[100px] w-[300px] absolute bg-slate-100 z-1 left-[-300px] bottom-[140px]"></div>
                    </div>


                    <div id="tab4" className="tabs_block target:flex target:bg-slate-100 target:flex-row border solid hidden pl-[20px] w-[100%] h-[520px]">
                        <ErrorBlock />
                        <div className="h-[100px] w-[300px] absolute bg-slate-100 z-1 left-[-300px] bottom-0"></div>
                    </div>
                </div>
                
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
              <div>
                <HorizontalSlider />
              </div>
            )}
            {activeIcon === "icon2" && (
              // Дайвинг
              <div>
                {/* Содержимое слайдера для иконки 2 */}
              </div>
            )}
            {activeIcon === "icon3" && (
              // Фотостудия
              <div>
                {/* Содержимое слайдера для иконки 3 */}
              </div>
            )}
          </div>
        )}
      </div>
    );
}

function ErrorBlock() {
    return (
      <div className="w-[90%] h-[90%] m-[20px] bg-white rounded p-8 shadow-md">
        <div className="mb-4">
          <p className="text-gray-700 mb-2">Если у вас возникли проблемы по поводу нашего сайта или услуги, пожалуйста,
          обратитесь <a href="https://vk.com/club208533320" className="text-blue-500">сюда</a>.</p>
        </div>
        <div className="mt-4">
          <p className="text-gray-700">Также вы можете просмотреть частые вопросы и ответы на них 
          в нашем сборнике: <a href="/faq" className="text-blue-500">FAQ</a>.</p>
        </div>
      </div>
    );
}
  
function FeedbackForm() {
    return (
      <div className="w-[700px] mx-auto bg-white rounded p-8 shadow-md">
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
            <textarea id="message" name="message" rows="4" className="form-textarea w-full px-4 py-2 border rounded-md focus:outline-none focus:border-violetmain"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-violetmain focus:outline-none focus:bg-blue-600">Отправить</button>
        </form>
      </div>
    );
}

export default Main