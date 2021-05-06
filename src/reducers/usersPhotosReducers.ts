import {ISingleUserPhoto} from '../entities/usersPhotos'
import * as actionTypes from '../actions/actionTypes/userPhotosTypes'
export interface IUsersPhotosReducer{
    usersPhotosList: ISingleUserPhoto[];

}

const defaultState = (): IUsersPhotosReducer => ({
    usersPhotosList:[]
})

export default(state=defaultState(), action: any)=>{
   
    switch(action.type){
        case actionTypes.GET_USERSPHOTOS: {
            const payload: actionTypes.IUserPhotosTypes['GET_USERSPHOTOS'] = action;
            console.log(payload.usersPhotos)
            return{
                ...state,
                usersPhotosList: payload.usersPhotos
            }
        }
       
        default: {
            
            return state
        }
    }
}