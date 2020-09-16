const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState = {
    profile: null
}

const profileReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state;
    }
}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})//AC

export default profileReducer;
