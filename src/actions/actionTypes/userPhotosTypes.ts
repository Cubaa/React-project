
import {ISingleUserPhoto} from '../../entities/usersPhotos'

export const GET_USERSPHOTOS = 'GET_USERSPHOTOS'; 

export interface IUserPhotosTypes{
    GET_USERSPHOTOS:{
        usersPhotos: ISingleUserPhoto[];
    }
}