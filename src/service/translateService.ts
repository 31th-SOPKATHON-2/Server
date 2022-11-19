import { Output } from './../interfaces/TranslateResponseDto';
import { PrismaClient } from '@prisma/client';
import { TranslateResponseDto } from '../interfaces/TranslateResponseDto';
const prisma = new PrismaClient();

//~ userId로 유저 조회
const getOutputByInput = async (input: string): Promise<TranslateResponseDto | null> => {
    const data = await prisma.translator.findUnique({
        where: {
            input,
        },
        select: {
            result: true,
            description: true,
            example: true,
        },
    });
    //단어가 db에 저장이 안되어있을 때
    if (!data) return null;
    //db에 있을 때
    return { input: input, output: data };
};

const translateService = { getOutputByInput };
export default translateService;
