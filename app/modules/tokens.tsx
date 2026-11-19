
import { StringifyOptions } from "vitest/internal/browser";
import { tokenType } from "./token_type";



export class Token
{
    type: tokenType;
    literal: Object
    line: number; //stores the line of the script the token came from for error handling and debugging for the user
    lexeme: string;

    public constructor(type_: tokenType, literal_: string, line_: number, lexeme_: string)
    {
        this.type = type_;
        this.literal = literal_;
        this.line = line_;
        this.lexeme = lexeme_;
    }

    public toString(): string
    {
        return this.type + " " + this.lexeme + " " + this.literal;
    }
}