const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        /*{id:1,followed:true,post:"Ведущий инженер",fullName:"Александр Сергеевич Пушкин",status:"На смене",tab:"10000111",tel:"89997274586"},
        {id:2,followed:false,post:"Инженер по АСУТП",fullName:"Александр Сергеевич Пушкин",status:"Выходной",tab:"10000222",tel:"89997274586"},
        {id:2,followed:true,post:"Приборист",fullName:"Александр Сергеевич Пушкин",status:"На больничном",tab:"10000333",tel:"89997274586"}
    */],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userAgent){
                        return {...u, followed:true}
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userAgent){
                        return {...u, followed:false}
                    }
                    return u;
                })
            }
        }        case SET_USERS: {
            return {...state, users: [...state.users, action.users]}
        }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})


export default usersReducer;
