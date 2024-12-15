import {Request, Response} from 'express'
import { defualtErrorMassage } from '../constants'

export const getAllUsers = (req : Request, res : Response) => {
    try {
        res.status(200).json({
            isSuccess: true,
            message: 'Successfully fetched all users!'
        })
    } catch (error) {
        res.status(500).json({
            isSuccess: false,
            message: defualtErrorMassage
        })
    }
}

export const createUser = (req : Request, res : Response) => {
    try {
        res.status(200).json({
            isSuccess: true,
            message: 'Successfully created new user!'
        })
    } catch (error) {
        res.status(500).json({
            isSuccess: false,
            message: defualtErrorMassage
        })
    }
}