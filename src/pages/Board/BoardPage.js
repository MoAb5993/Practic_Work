import {BoardList} from "../../entities/board";
import {Header} from "../../widgetes/Header";
import {Footer} from "../../widgetes/Footer";


export const BoardPage = () => {
    return (
        <>
            <Header/>
            <BoardList/>
            <Footer/>
        </>
    )
}