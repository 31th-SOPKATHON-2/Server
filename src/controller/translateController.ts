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
        if (!output) return res.status(sc.ACCEPTED).send(success(sc.ACCEPTED, '번역 결과 없음', { input: input }));
        //번역 성공
        return res.status(sc.OK).send(success(sc.OK, '번역 성공', output));
    } catch (error) {
        console.log(error);
        return res
            .status(sc.INTERNAL_SERVER_ERROR)
            .send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
    }
};

const translateController = {
    translate,
};

export default translateController;
