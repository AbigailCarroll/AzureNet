
export class Node
{
    private data: any;
    private type: string;
    private next: Node | null;

    
    constructor(data_: any);
    constructor(data_: any, next_: Node | null)
    constructor(data_: any, next_: Node | null = null)
    {
        this.data = data_;
        this.type = typeof data_;
        this.next = next_;
    }

    get getData(): any
    {
        return this.data;
    }

    get getType(): string
    {
        return this.type;
    }

    get getNext(): Node | null
    {
        return this.next;
    }

    set setNext(node: Node | null)
    {
        this.next = node;
    }


}

