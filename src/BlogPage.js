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
    <div className="max-w-md mx-auto my-[100px] bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-[400px] w-full object-cover md:w-48" src={imageSrc} alt={title} />
        </div>
        <div className="p-8 relative">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Новости
          </div>
          <h2 className="text-gray-900 text-2xl font-semibold mt-2 mb-2">{title}</h2>
          <p className="text-gray-700">{description}</p>
          <div className="mt-4">
            <p className="text-gray-600 absolute bottom-8">Автор: {author}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const NewsPage = () => {
  const newsData = [
    {
      title: 'Кафе? Удивительно!',
      description: 'Описание новости 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      author: 'Синячков В.О.',
      imageSrc: 'https://via.placeholder.com/300' 
    },
    {
      title: 'Открытие филиала',
      description: 'Описание новости 2. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      author: 'Шохинджон И.Ш.',
      imageSrc: 'https://via.placeholder.com/300' 
    },
    {
      title: 'На каждую зиму — зимнее развлечение!',
      description: 'Описание новости 3. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      author: 'Синячков В.О.',
      imageSrc: 'https://via.placeholder.com/300' 
    },
    {
      title: 'Ну кто не любит красивые фотографии?',
      description: 'Наверняка многие уже успели сходить в нашу фотостудии и сделать несколько красивых фотографий для своего альбома? Мы открываем новую студию с новыми видами!',
      author: 'Синячков В.О.',
      imageSrc: 'https://via.placeholder.com/300' 
    }
  ];

  return (
    <div className=" ">
      <div className="flex justify-center mt-[50px]">
        <h1 className="font-semibold text-3xl">Наш блог</h1>
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