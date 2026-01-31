import {BoardList} from "../../entities/board";
import {Header} from "../../shared/ui/Header";
import {Footer} from "../../shared/ui/Footer";


export const BoardPage = () => {
    return (
        <>
            <Header/>
            <BoardList/>
            <Footer/>
        </>
    )
}