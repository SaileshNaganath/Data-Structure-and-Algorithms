class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

let node = new Node(10);
let node2 = new Node (20);
node.next = node2;
console.log(node);