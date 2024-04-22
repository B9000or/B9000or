import './App.css';
import Header from './Header';
// import About from './About';
import Footer from './Footer';

function AboutPage() {
  return (
    <div>
      <div />
      <Header />
      <PhotoTop />
      <AboutStatic />
      
      <div className=" h-[1000px] " />
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

function AboutStory(){
  return(
    <div>
      
    </div>
  )
}

function PhotoTop(){
  return(
    <div>
      <img src="http://archello.s3.eu-central-1.amazonaws.com/images/2012/11/02/Bermuda001a.1506068793.9485.jpg"
      alt="Изображение 1" 
      className="h-[400px] object-cover w-[100%]" />
    </div>
  )

}

export default AboutPage;