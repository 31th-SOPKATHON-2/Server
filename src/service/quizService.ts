import { QuizInfo, QuizResponseDto } from './../interfaces/QuizResponseDto';
import { PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

const getQuiz = async (): Promise<QuizResponseDto> => {
    try {
        const quizs = await prisma.quiz.findMany({
            select: {
                question: true,
                answer_id: true,
                Example_Example_quiz_idToQuiz: {
                    select: {
                        id: true,
                        text: true,
                    },
                },
            },
            orderBy: {
                id: 'asc',
            },
        });
        const data: QuizInfo[] = [];

        for await (let quiz of quizs) {
            data.push({
                question: quiz.question,
                answerId: (quiz.answer_id != null)?  quiz.answer_id : 0,
                examples: quiz.Example_Example_quiz_idToQuiz,
            });
        }

        return { quiz: data };
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const quizService = {
    getQuiz,
};
export default quizService;
