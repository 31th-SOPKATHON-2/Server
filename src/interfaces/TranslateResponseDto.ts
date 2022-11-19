export interface TranslateResponseDto {
    input: string,
    output: Output
}

export interface Output {
    result: string,
    description: string,
    example: string
}