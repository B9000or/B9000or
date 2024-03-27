import Header from "./Header"

// кнопки:
let butMain = "shadow-lg shadow-violet-500/50 absolute top-[640px] py-[30px] px-[80px] left-[17%] text-3xl font-[350] border-violetmain border-4 justify-center hover:opacity-80"
// заголовки:
let h1main = "flex mt-[920px] text-4xl w-[100%] justify-center"

function Main(){
    return(
        <div>
            <First />
        </div>
    )
}

function First(){
    return(
        <div>
            
            {/* <div className="pl-[15%] pr-[15%] header-h">
                <Header/>
            </div> */}
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
            <div className={h1main}>
                <h1 className='{h1main} m-0'>Популярное</h1>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Main