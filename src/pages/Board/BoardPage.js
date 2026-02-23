import {Boards} from "../../entities/board";
import {Header, Footer} from "../../shared/ui";


export const BoardPage = () => {
    return (
        <>
            <Header/>
            <Boards/>
            <Footer/>
        </>
    )
}