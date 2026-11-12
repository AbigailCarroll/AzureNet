
class StackNode
{
    private data: any;
    private type: string;
    private next: StackNode | null;

    
    constructor(data_: any);
    constructor(data_: any, next_: StackNode | null)
    constructor(data_: any, next_: StackNode | null = null)
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

    get getNext(): StackNode | null
    {
        return this.next;
    }

    set setNext(node: StackNode | null)
    {
        this.next = node;
    }


}

