// VERIFY EMAIL

import express, { Request, Response, NextFunction } from "express";
import { UserAuth } from "../models/Users";
import { validateLogin } from "../utils/validatorUtils";
import bcrypt from 'bcryptjs'
import jwt, { Secret } from 'jsonwebtoken'


//This function handles verification of email, a route with confirmation code is sent to user email on signup
export const verifyEmail = async (req: Request, res: Response, next: NextFunction) => {
    const confirmationCode = req.query.pass
    try {
        const user = await UserAuth.findOne({ confirmCode: confirmationCode })
        if (!user) {
            return res.status(404).json({ message: 'user not found' })
        }
        user.status = "Active";
        await user.save((err: any) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
        })
        res.status(201).render('index')
    } catch (err: any) {
        res.status(404).json('verification failed sign up again')
    }
}

//This function handles login, after emails are verified users are redirected to login
export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    const { error } = validateLogin(req.body)
    if (error) {
        return res.status(400).send(error.details[0].message)
    } else {
        try {
            const findUser = await UserAuth.findOne({ email: req.body.email })
            if (!findUser) return res.status(400).json({ message: 'invalid login credentials' })
            const match = await bcrypt.compare(req.body.password, findUser.password)
            if (!match) return res.status(400).json({ message: 'invalid login credentials' })
            if (findUser.status === 'Pending') return res.status(403).json({
                message: `kindly verify your account via the email sent to you`
            })
            const user = { email: req.params.email }
            const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET as Secret)
            res.status(201).json({ message: 'login successful', accessToken })
        } catch (error: any) {

        }
    }
}


//My ROUTES