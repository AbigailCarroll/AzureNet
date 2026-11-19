import {Node} from './node'


export class Stack 
{
    top: Node | null;

    public constructor()
    {
        this.top = null;
    }

    Push(data: any)
    {
        const new_node: Node = new Node(data, this.top);
        this.top = new_node;
    }

    Pop(): any /*this function returns just the data of the top node, as such an error needs to be thrown so a return value of 
    'null' is discernable from the stack just being empty. It may be good to change the function so it returns a reference to
    the error throwing becomes unessecary, but this just seems like it adds unnecessary typechecking since the function would 
    then return Node | null rather than just any.*/ 
    {
        if(this.top === null) 
        {
            throw new Error("Empty stack Error");
        }
        var data = this.top.getData;
        this.top = this.top.getNext;
        return data;
    }

    Peek(): any
    {
        if(this.top === null) 
        {
           throw new Error("Empty stack Error");
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
        //could/should also rewite the stack class to just store a running count rather than calculate it on the fly.
        if(this.top === null) return 0;
        var node: Node = this.top
        var count: number = 1;
        while(node.getNext) // != null
        {
            node = node.getNext;
            count++;
        }
        return count
    }
}