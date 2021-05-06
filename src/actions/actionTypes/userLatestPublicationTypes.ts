
import {ISingleLatestPublication} from '../../entities/usersLatestPosts'

export const GET_USERSLATESTPUBLICATIONS = 'GET_USERSLATESTPUBLICATIONS'; 

export interface IUserLatestPublicationsTypes{
    GET_USERSLATESTPUBLICATIONS:{
        usersLatestPublications: ISingleLatestPublication[];
    }
}