export interface QuizResponseDto {
    quiz: QuizInfo[];
}
export interface QuizInfo {
    question: string;
    answerId: number;
    examples: Example[];
}
interface Example {
    id: number;
    text: string;
}
