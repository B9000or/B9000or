import back from "./main-back2.PNG"
import Header from "./Header"

function Main(){
    return(
        <div >
            <div className="pl-[15%] pr-[15%] align-middle">
                <Header className="" />
            </div>
            <div className="w-[100%] h-[880px]  absolute top-0 -z-10 bg-[url(./main-back2.PNG)] bg-no-repeat bg-cover bg-center">
                {/* <img src={back} className="object-cover w-[100%]"/> */}
            </div>
            <div className="absolute inset-x-0 top-[32%] h-16 w-[30%] left-[15%] text-4xl">ТО САМОЕ, ЧТО ВЫ ДАВНО ХОТЕЛИ</div>

        </div>
    )
}

export default Main