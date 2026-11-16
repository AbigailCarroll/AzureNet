import { expect } from 'vitest'
import { Stack } from '../app/modules/stack'
import { test as baseTest } from 'vitest'

const test = baseTest.extend('stack', () => new Stack()) 
/* Arranges the stack object for the tests, for some reason beforeEach wasn't working to reset it.

/*
beforeEach(() => {
    stack = new Stack();

    console.log("HELLO WORLD");
})

afterEach(() =>{
    console.log("HELLO WORLD");
})
*/

test('Stack is initialised empty', ({stack}) => {
    var isEmpty: boolean = stack.IsEmpty();
    expect(isEmpty).toBe(true);
})

test('Stack.Push() successfully adds nodes to the stack', ({stack}) => {
    stack.Push(7);
    var isEmpty: boolean = stack.IsEmpty();
    expect(isEmpty).toBe(false);
})


test('Stack.Pop() reads the correct value and leaves the stack empty', ({stack}) => {
    stack.Push(7);
    var pop = stack.Pop();
    expect(pop).toBe(7);
    var isEmpty: boolean = stack.IsEmpty();
    expect(isEmpty).toBe(true);
})

test('Stack.Peek() reads the correct value, and leaves the stack intact', ({stack}) => {
    stack.Push(7);
    var peek = stack.Peek();
    expect(peek).toBe(7);
    var isEmpty: boolean = stack.IsEmpty();
    expect(isEmpty).toBe(false);
})

test('Stack accepts multiple data types', ({stack}) => {
    var arr = [7, "Hello World!", false, [7,8,9], null]
    for (var i = 0; i < arr.length; i++)
    {
        stack.Push(arr[i]);
    }
    var stack_size: number = stack.getSize()
    expect(stack_size).toBe(arr.length);
})

test('Stack stores and pops different data types', ({stack}) => {
    var arr = [7, "Hello World!", false, [7,8,9], null]
    for (var i = 0; i < arr.length; i++)
    {
        stack.Push(arr[i]);
    }
    for (var i = arr.length-1; i >= 0; i--)
    {
        var pop = stack.Pop();
        expect(pop).toBe(arr[i]);
    }
        var stack_size: number = stack.getSize()
    expect(stack_size).toBe(0);
})


//SAD PATH(s)
test('Error is thrown when popping and peeking from an empty stack', ({stack}) => {
    expect.assert.Throw(() => {stack.Pop()}, "Empty stack Error");
    expect.assert.Throw(() => {stack.Peek()}, "Empty stack Error");
})