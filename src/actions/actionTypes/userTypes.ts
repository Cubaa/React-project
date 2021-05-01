import {ISingleUSer} from '../../../entities/users'

export const GET_USERS = 'GET_USERS'; 

export interface IUserTypes{
    GET_USERS:{
        usersList: ISingleUSer[];
    }
}