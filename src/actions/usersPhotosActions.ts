
import {Dispatch} from 'redux';

import * as actionTypes from '../actions/actionTypes/userPhotosTypes'

import {ISingleUserPhoto} from '../entities/usersPhotos'


export const getUsersPhotos = (): Promise<ISingleUserPhoto[]> =>((dispatch: Dispatch) =>{
    return fetch(`https://reqres.in/api/users?page=1&id=2`)
        .then(res =>res.json())
        .then((usersPhotos: ISingleUserPhoto[])=>{
            dispatch({
                type: actionTypes.GET_USERSPHOTOS,
                usersPhotos
            })
        })
}) as any;