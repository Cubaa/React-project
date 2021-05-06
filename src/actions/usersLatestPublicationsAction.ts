
import {Dispatch} from 'redux';

import * as actionTypes from '../actions/actionTypes/userLatestPublicationTypes'

import {ISingleLatestPublication} from '../entities/usersLatestPosts'


export const getUsersLatestPublications = (userId: number): Promise<ISingleLatestPublication[]> =>((dispatch: Dispatch) =>{
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(res =>res.json())
        .then((usersLatestPublications: ISingleLatestPublication[])=>{
            dispatch({
                type: actionTypes.GET_USERSLATESTPUBLICATIONS,
                usersLatestPublications
            })
        })
}) as any;