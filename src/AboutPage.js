import './App.css';
import Header from './Header';
import Footer from './Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function AboutPage() {
  return (
    <div>
      <div />
      <Header />
      <PhotoTop />
      <AboutStatic />
      <BannerSlider />
      <Footer />
    </div>
  );
}

function AboutStatic () {
  return (
    <div className="flex flex-col justify-center items-center  bg-gray-100">
      <div className="flex items-center h-[800px] w-full">
        {/* блок фото слева */}
        <div className="mr-[15%]">
          <img
            className="ml-[10%] h-[600px] max-w-[600px] object-cover border-l-4 border-t-2 border-violetmain"
            src="https://www.shkolazhizni.ru/img/content/i149/149967_or.jpg"
            alt="First Block Image"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Учитываем все ваши пожелания</h2>
          <div className="h-[4px] w-[30%] left-[-20%] border-2 border-violetmain" />
          <p className="text-gray-600 mt-[20px] w-[50%]">
            Собираем информацию, читаем все ваши отзывы и предложения.
            Все интересные идеи сразу берутся на заметку и приступают к 
            обработке.
          </p>
        </div>
      </div>
      
      <div className="flex items-center h-[800px] w-full">
        {/* блок фото справа */}
        <div className='ml-[10%] w-[50%]'>
          <h2 className="text-3xl font-bold mb-4">Заботимся о вашей безопасности</h2>
          <div className="h-[4px] w-[30%] left-[-20%] border-2 border-violetmain" />
          <p className="text-gray-600 mt-[20px] w-[50%]">
            Перед тем, как добавить ту или иную услугу в каталог, мы обязательно
            проверяем все лицензии и отправляем своих специалистов для проверки 
            соблюдений всех правил безопасности компании.
          </p>
        </div>
        <div>
          <img
            className="mr-[10%] h-[600px] max-w-[600px] object-cover object-left border-r-4 border-t-2 border-violetmain"
            src="https://firebuyer.com/wp-content/uploads/2021/04/Depositphotos_247500834_ds-1-scaled.jpg"
            alt="second Block Image"
          />
        </div>
      </div>
      <div className="flex items-center h-[800px] w-full">
        {/* блок фото слева */}
        <div className="mr-[15%]">
          <img
            className="ml-[10%] h-[600px] max-w-[600px] object-cover object-left border-l-4 border-t-2 border-violetmain"
            src="https://klev.club/uploads/posts/2023-10/1698702249_klev-club-p-kartinki-chelovek-na-prozrachnom-fone-43.png"
            alt="First Block Image"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Отвечаем на все вопросы</h2>
          <div className="h-[4px] w-[30%] left-[-20%] border-2 border-violetmain" />
          <p className="text-gray-600 mt-[20px] w-[50%]">
            Если у вас возникла проблема, связанная с нашим сайтом 
            сотрудниками, или любая другая, наша техподдержка всегда на связи
            и готова ответить вам в любое рабочее время.
          </p>
        </div>
      </div>
      
      <div className="flex items-center h-[800px] w-full">
        {/* блок фото справа */}
        <div className='ml-[10%] w-[50%]'>
          <h2 className="text-3xl font-bold mb-4">Относимся с пониманием</h2>
          <div className="h-[4px] w-[30%] left-[-20%] border-2 border-violetmain" />
          <p className="text-gray-600 mt-[20px] w-[50%]">
            У вас день рождения или что-то ещё? Хотите повеселиться
            большой компанией? Мы предлагаем множество акций, в которых
            при определённых условиях вы можете получить скидку или 
            призы, специальные программы.
          </p>
          <p className="text-gray-600 mt-[20px] w-[50%]">
            Вы обязательно найдёте что-то для себя!
          </p>
        </div>
        <div>
          <img
            className="mr-[10%] h-[600px] max-w-[600px] object-cover object-right border-r-4 border-t-2 border-violetmain"
            src="https://www.etcspl.com/wp-content/uploads/2017/12/crm-img-banner.jpg"
            alt="second Block Image"
          />
        </div>
      </div>
    </div>
  );
};

function PhotoTop(){
  return(
    <div>
      <img src="http://archello.s3.eu-central-1.amazonaws.com/images/2012/11/02/Bermuda001a.1506068793.9485.jpg"
      alt="Изображение 1" 
      className="h-[400px] object-cover w-[100%]" />
    </div>
  )
}

function BannerSlider (){
  const banners = [
    {
      title: 'Заголовок 1',
      description: 'Описание баннера 1',
      additionalInfo: 'Дополнительная информация 1',
      imageUrl: 'https://via.placeholder.com/400x300',
    },
    {
      title: 'Заголовок 2',
      description: 'Описание баннера 2',
      additionalInfo: 'Дополнительная информация 2',
      imageUrl: 'https://via.placeholder.com/400x300',
    },
    {
      title: 'Заголовок 3',
      description: 'Описание баннера 3',
      additionalInfo: 'Дополнительная информация 3',
      imageUrl: 'https://via.placeholder.com/400x300',
    },
  ];

  const NextArrow = ({ onClick }) => (
    <button className="absolute top-1/2 right-[5%] transform -translate-y-1/2 bg-white rounded-full p-2 z-10 " onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-violetmain" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button className="absolute top-1/2 left-[5%] transform -translate-y-1/2 bg-white rounded-full p-2 z-10" onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-violetmain" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div>
      <div className='flex justify-center mt-[100px]'>
        <a className='text-5xl got-bold '>
          Наши специалисты
        </a>
      </div>
      <Slider {...settings} className="my-[100px]">
        {banners.map((banner, index) => (
          <div key={index}>
            <div className="flex justify-center">
              <div className="w-3/4 bg-gray-200 rounded-lg overflow-hidden flex">
                <div className="w-1/2 p-8">
                  <h2 className="text-2xl font-bold mb-4">{banner.title}</h2>
                  <p className="text-lg mb-4">{banner.description}</p>
                  <p className="text-sm text-gray-600">{banner.additionalInfo}</p>
                </div>
                <div className="w-1/2">
                  <img
                    className="object-cover h-full w-full"
                    src={banner.imageUrl}
                    alt="Изображение"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AboutPage;