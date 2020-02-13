// class Node{
//     constructor(name,left_child,right_child)
//     {
//         this.name = name,
//         this.left_child = left_child,
//         this.right_child = right_child
//     }
// }

// const inOrder = node =>{
//     if(!node.left_child && !node.right_child)
//     {
//         console.log(node.name)
//         return 
//     }
//     inOrder(node.left_child)
//     console.log(node.name)
//     inOrder(node.right_child)
// }

// const postOrder = node => {
//     if(!node.left_child && !node.right_child)
//     {
//         console.log(node.name)
//         return
//     }
    
//     postOrder(node.left_child)
//     postOrder(node.right_child)
//     console.log(node.name)
// }

// const preOrder = node =>{
//     if(!node.left_child && !node.right_child)
//     {
//         console.log(node.name)
//         return
//     }
//     console.log(node.name)
//     preOrder(node.left_child)
//     preOrder(node.right_child)
// }


// const leaf = node =>{
//     if(!node.left_child && !node.right_child)
//     {
//         return 1
//     }
//     else
//     {
//         return leaf(node.left_child) + leaf(node.right_child)
//     }
// }

// const totalnodes= node =>{
//     count = 0
//     if(!node)
//     {
//         return 0
//     }
//     if(node){
//         count++
//     }
    
//     count = count + totalnodes(node.left_child) + totalnodes(node.right_child)
//     return count
// }

// var dashrad = new Node('dashrad')
// var ram = new Node('ram')
// var laxman = new Node('laxman')
// var luv = new Node('luv')
// var kush = new Node('kush')
// dashrad.left_child = ram
// dashrad.right_child = laxman
// ram.left_child = luv
// ram.right_child = kush
// inOrder(dashrad)
// var leafnode = leaf(dashrad)
// var total = totalnodes()
// console.log(leafnode)
// console.log(total)
// // postOrder(dashrad)
// // preOrder(dashrad)