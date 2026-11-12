
class Stack {
    private top: StackNode | null;

    constructor()
    {
        this.top = null;
    }

    set Push(data: any)
    {
        const new_node: StackNode = new StackNode(data, this.top);
        this.top = new_node;
    }

    Pop(): any
    {
        if(this.top === null) 
        {
           //throw empty stack error
           return null;
        }
        var data = this.top.getData;
        this.top = this.top.getNext;
        return data;
    }

    Peek(): any
    {
        if(this.top === null) 
        {
           //throw empty stack error
           return null;
        }
        return this.top.getData;
    }

    IsEmpty(): boolean
    {
        if(this.top === null) return true;
        return false;
    }

    getSize(): number
    {
        //idk if i want this to be available to the user but it might be good to have for other internal functions.
        if(this.top === null) return 0;
        var node: StackNode = this.top
        var count: number = 1;
        while(node.getNext) // != null
        {
            node = node.getNext;
            count++;
        }
        return count
    }
}