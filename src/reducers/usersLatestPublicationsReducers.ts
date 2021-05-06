import {ISingleLatestPublication} from '../entities/usersLatestPosts'
import * as actionTypes from '../actions/actionTypes/userLatestPublicationTypes'
export interface IUsersLatestPublicationsReducer{
    usersLatestPublicationsList: ISingleLatestPublication[];

}

const defaultState = (): IUsersLatestPublicationsReducer => ({
    usersLatestPublicationsList:[]
})

export default(state=defaultState(), action: any)=>{
    switch(action.type){
    
        case actionTypes.GET_USERSLATESTPUBLICATIONS: {
            const payload: actionTypes.IUserLatestPublicationsTypes['GET_USERSLATESTPUBLICATIONS'] = action
        return{
            ...state,
            usersLatestPublicationsList: payload.usersLatestPublications
        }
    }
        default: {
            return state
        }
    }
}





