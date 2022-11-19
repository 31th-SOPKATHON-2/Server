import { Request, Response } from 'express';
import { rm, sc } from '../constants';
import { fail, success } from '../constants/response';
import { translateService } from '../service';

const translate = async (req: Request, res: Response) => {
    try {
        const input = req.query.input as string;
        if (!input) return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.BAD_REQUEST));

        //번역 가져오기
        const output = await translateService.getOutputByInput(input);
        //번역 결과 없을 때
        if (!output) return res.status(sc.NO_CONTENT).send();
        //번역 결과 있을 때
        const data = {
            input: input,
            output: output,
        };
        return res.status(sc.OK).send(success(sc.OK, '번역 성공', data));
    } catch (error) {
        return res
            .status(sc.INTERNAL_SERVER_ERROR)
            .send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
    }
};

const translateController = {
    translate,
};

export default translateController;
