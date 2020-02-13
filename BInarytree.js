class Node{
    constructor(nameofNode,left_child,right_child)
    {
        this.nameofNode = nameofNode,
        this.left_child = left_child,
        this.right_child = right_child
    }

}

const inOrder = node => {
    if(!node.left_child && ! node.right_child)
    {
        console.log(node.nameofNode)
        return 
    }
    inOrder(node.left_child)
    console.log(node.nameofNode)
    inOrder(node.right_child)
}

const preOrder = node => {
    if(!node.left_child && ! node.right_child)
    {
        console.log(node.nameofNode)
        return 'hi'
    }
    console.log(node.nameofNode)
    preOrder(node.left_child)
    preOrder(node.right_child)
}

const postOrder = node => {

    if(!node.left_child && !node.right_child)
    {
        console.log(node.nameofNode)
        return 
    }
    postOrder(node.left_child)
    postOrder(node.right_child)
    console.log(node.nameofNode)    
}

const numberOrder = node =>{
    count = 0
    if(!node)
    {
        return 0
    }

    if(node!= null){
        count++
    }
    count = count + numberOrder(node.left_child) + numberOrder(node.right_child)
    return count
}


const numberLeaves = node =>{
    if(!node.left_child && !node.right_child)
    {
        return 1
    }
    else
    {
        return numberLeaves(node.left_child) + numberLeaves(node.right_child)
    }
}

const heightoftree = node =>{
    if(node == null){
        return 0
    }
    return Math.max( heightoftree(node.left_child),heightoftree(node.right_child)) + 1
}
const Dashrad = new Node('Dasrad')

const Ram = new Node('ram')

const Lakshman = new Node('lakshman')

const Luv = new Node('luv')

const Kush = new Node('kush')


Dashrad.left_child = Ram
Dashrad.right_child = Lakshman

Ram.left_child = Luv
Ram.right_child = Kush

console.log(Dashrad)

// // Inorder

// inOrder(Dashrad)


// // // Preorder

// preOrder(Dashrad)

// // Postorder

// postOrder(Dashrad)

console.log(numberOrder(Dashrad))

console.log(numberOrder(Dashrad))
// console.log(numberLeaves(Dashrad))
console.log(heightoftree(Dashrad))


