import { Request, Response } from 'express';
import prisma from '../client';

// Creating a User

export async function createUser(req: Request, res: Response) {
    try {
        const user = await prisma.user.create({
            data: req.body,
        });

        res.status(201).json({
            status: true,
            message: 'User Successfully Created',
            data: user,
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: 'Server Error',
        });
    }
}

export async function getUsers(req: Request, res: Response) {
    const users = await prisma.user.findMany();

    res.json({
        status: true,
        message: 'Users Fetched Successfully',
        data: users,
    });
}

export async function getUser(req: Request, res: Response) {
    const { userId } = req.params;

    const user = await prisma.user.findFirst({
        where: {
            id: userId,
        },
    });

    if (!user) {
        res.json({
            status: false,
            message: 'Invalid UserId',
            data: [],
        });
    } else {
        res.json({
            status: true,
            message: 'User fetched successfully',
            data: user,
        });
    }
}

//Deleting a User
export async function deleteUser(req: Request, res: Response) {
    const { userId } = req.params;
    try {
        const user = await prisma.user.findFirst({
            where: {
                id: userId,
            },
        });

        if (!user) {
            res.status(401).json({
                status: false,
                message: 'User Not Found',
            });
        } else {
            await prisma.user.delete({
                where: {
                    id: userId,
                },
            });

            res.status(201).json({
                status: true,
                message: 'User Deleted Successfully',
            });
        }
    } catch {
        res.status(500).json({
            status: false,
            message: 'Server Error',
        });
    }
}

// updating a single user
export async function updateUser(req: Request, res: Response) {
    try {
        const { userId } = req.params;

        const user = await prisma.user.findFirst({
            where: {
                id: userId,
            },
        });

        if (!user) {
            res.status(401).json({
                status: false,
                message: 'User not found',
            });
        } else {
            const updatedUser = await prisma.user.update({
                where: {
                    id: userId,
                },
                data: req.body,
            });

            res.json({
                status: true,
                message: 'User Successfully updated',
                data: updatedUser,
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: false,
            message: 'server error',
        });
    }
}
