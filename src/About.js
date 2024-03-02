import userImg from './es4.jpg';

const user = {
    name: 'sports',
    imageSrc: userImg,
    userWidth: '100%',
    userHeight: '100%',
  };

function About() {
    return (
        <div className="h-720 position-relative block pt-12">
            <div >
                <div className='myBlock'>
                    <div className='p-20 pl-80 banner flex justify-center'>
                        <p className='text-5xl'>МЕЧТА НА ВЫБОР</p>
                        <div className='myBlock2'>
                        </div>
                    </div>

                </div>

                <div>

                    <img 
                        src= {user.imageSrc}
                        alt={user.name}
                        style={{
                            width: user.userWidth,
                            height: user.userHeight,
                        }
                        }
                    ></img>
                </div>


            </div>
            <div className='h-60'>
            </div>
            <div className='h-60'>
            </div>
        </div>
    )
}

export default About;