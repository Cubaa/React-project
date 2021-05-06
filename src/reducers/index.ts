import {combineReducers} from 'redux'

import users, {IUsersReducer} from './usersReducers'
import usersLatestPublicationsList, {IUsersLatestPublicationsReducer} from './usersLatestPublicationsReducers'
import usersPhotosList, {IUsersPhotosReducer} from './usersPhotosReducers'


export default combineReducers({
    users,
    usersLatestPublicationsList,
    usersPhotosList
})

export interface IState{
    users: IUsersReducer,
    usersLatestPublicationsList: IUsersLatestPublicationsReducer,
    usersPhotosList: IUsersPhotosReducer
}