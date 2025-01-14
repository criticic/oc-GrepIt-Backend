/* eslint-disable no-unused-vars */
import express from 'express';
import {
    createRoom,
    removeUserFromRoom,
    updateRoom,
    deleteRoom,
    addUserToRoom,
    disconnectUserFromRoom,
    acceptOrRejectPendingUser,
    announce,
    leaderboardRoom,
    startQuiz
} from '../../controllers/room.controllers.js';
import { authVerify } from '../../middlewares/userAuth.middleware.js';

const roomRouter = express.Router();

roomRouter.post('/create', authVerify, createRoom);
roomRouter.post('/user/remove', authVerify, removeUserFromRoom);
roomRouter.patch('/update', authVerify, updateRoom);
roomRouter.post('/user/add', authVerify, addUserToRoom);
roomRouter.post('/user/disconnect', authVerify, disconnectUserFromRoom);
roomRouter.post('/user/pending', authVerify, acceptOrRejectPendingUser);
roomRouter.post('/announce', authVerify, announce);
roomRouter.delete('/delete', authVerify, deleteRoom);
roomRouter.get('/leaderboard', authVerify, leaderboardRoom);
roomRouter.post("/startQuiz", authVerify, startQuiz)

export default roomRouter;

