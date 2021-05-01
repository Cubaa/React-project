
import {Dispatch} from 'redux';
import * as actionTypes from '../actions/actionTypes/userTypes'
import {ISingleUSer} from '../../entities/users'

export const getUsers = (): Promise<ISingleUSer[]> =>((dispatch: Dispatch) =>{
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>res.json())
        .then((usersList: ISingleUSer[])=>{
            dispatch({
                type: actionTypes.GET_USERS,
                usersList
            })
        })
}) as any;