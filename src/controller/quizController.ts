import { Request, Response } from 'express';
import { rm, sc } from '../constants';
import { fail, success } from '../constants/response';
import { quizService } from '../service';

const getQuiz = async (req: Request, res: Response) => {
    try {
        const data = await quizService.getQuiz();
        if (!data) {
            return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NO_QUIZ));
        }
        return res.status(sc.OK).send(success(sc.OK, rm.GET_QUIZ_SUCCESS, data));
    } catch (error) {
        console.log(error);
        return res
            .status(sc.INTERNAL_SERVER_ERROR)
            .send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
    }
};
const quizController = {
    getQuiz,
};

export default quizController;
