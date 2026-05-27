import express, { Router } from 'express';
import { sendMessage } from '../controllers/messagesController';

const router: Router = express.Router();

router.post('/', sendMessage);

export default router;
