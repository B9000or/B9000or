import './App.css';
import Header from './Header';
import Footer from './Footer';

function BlogPage() {
  return (
    <div>
      <div />
      <Header />
      <NewsPage />
      
      <Footer />
    </div>
  );
}


const NewsCard = ({ title, description, author, imageSrc }) => {
  return (
    <div className="max-w-md mx-auto my-[100px] bg-white rounded-xl shadow-md overflow-hidden lg:max-w-2xl">
      <div className="lg:flex">
        <div className="lg:flex-shrink-0">
          <img className="h-[400px] w-full object-cover lg:w-60" src={imageSrc} alt={title} />
        </div>
        <div className="px-8 pt-4 relative">
          <div className="uppercase tracking-wide text-xl text-violetmain font-semibold">
            Новости
          </div>
          <h2 className="text-gray-900 text-2xl font-semibold mt-2 mb-2">{title}</h2>
          <p className="text-gray-700 text-[18px]">{description}</p>
          <div className="mt-4">
            <p className="text-gray-600 absolute bottom-8">Автор: {author}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

function NewsPage(){
  const newsData = [
    {
      title: 'Кафе? Удивительно!',
      description: 'Совсем недавно мы смогли договориться с наиприятнейшеми людьми, владеющими несколькими точками одноимённого кафе к Питере. Что это за кафе? Вам стоит следить за новостями, чтобы узнать об этом первее остальных, ведь вместе с началом сотрудничества наша компания предложит ограниченное количество скидок нашим пользователям!',
      author: 'Синячков В.О.',
      imageSrc: 'https://avatars.mds.yandex.net/i?id=47b9c18d94fb4cb89b9cb24ea8470f491c7ee79a-12658662-images-thumbs&n=13' 
    },
    {
      title: 'Открытие филиала',
      description: 'Наша компания растёт, а вместе с ней и количество сотрудников-специалистов, оборудования, документов и прочего того, о чём вам знать необязательно. Но вот, что вам стоит знать — скоро появится доступ к посещению наших офисов в качестве экскурсии, вместе с набором желающих устроиться на работу!',
      author: 'Шохинджон И.Ш.',
      imageSrc: 'https://sportishka.com/uploads/posts/2022-04/1650620157_9-sportishka-com-p-ofisnoe-zdanie-krasivo-foto-10.jpg' 
    },
    {
      title: 'На каждую зиму — зимнее развлечение!',
      description: 'Совсем скоро откроется зимний сезон: лыжи, сани, приключения! Именно по этому, вместе с сезоном, мы открываем новые места во всех зимних развлечениях вместе с новыми акциями! Для ознакомления, перейдите на страницу желаемой услуги, что относится к зимним развлечениям.',
      author: 'Синячков В.О.',
      imageSrc: 'https://vsegda-pomnim.com/uploads/posts/2023-07/1689080014_vsegda-pomnim-com-p-zimnie-zabavi-foto-62.jpg' 
    },
    {
      title: 'Ну кто не любит красивые фотографии?',
      description: 'Наверняка многие уже успели сходить в нашу фотостудии и сделать несколько красивых фотографий для своего альбома? Мы понимаешь, что многим всё равно хочется чего-то особенного! Поэтому мы добавляем возможность нанять фотографа вместе с любой услугой из нашего каталога со скидкой 10%!',
      author: 'Синячков В.О.',
      imageSrc: 'https://sportishka.com/uploads/posts/2022-03/1646418354_4-sportishka-com-p-interesnie-selfi-turizm-krasivo-foto-4.jpg' 
    }
  ];

  return (
    <div className=" ">
      <div className="flex justify-center mt-[50px]">
        <h1 className="text-5xl">Наш блог</h1>
      </div>
      <div>
        {newsData.map((news, index) => (
          <NewsCard
            key={index}
            title={news.title}
            description={news.description}
            author={news.author}
            imageSrc={news.imageSrc}
          />
        ))}
      </div>
    </div>
  )
};

export default BlogPage