export const ENUM_LINK = {
    MAIN: '/',
    REGISTER: '/register',
    BOARDS: '/boards',
    LIST: '/board/:id',
    getBoardPath: (id, title) => `/board/${id}?title=${title}`
}