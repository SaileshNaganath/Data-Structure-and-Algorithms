class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

let node = new Node(10);
let node2 = new Node (20);
node.next = node2;

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.length = 0
    }
    insertAtStart(data){
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
    insertAtEnd(data){
        let newNode = new Node(data);

        if(this.head == null){
            this.head = newNode;
            this.length++;
        }
        else{
            let current = this.head;
            while(current.next != null){
                current = current.next;
            }
            current.next = newNode;
            this.length++;
        }
    }
    insertAtIndex(data,index){
        if(index == 0) this.insertAtStart(data)
        else if(index < 0 || index>= this.length){
            console.log("Linked lIst index out of bounds!");
        }
        else{
            //1.Define a node
            let newNode =new Node(data);
            //2.Traverse till index -1
            let current,previous;
            current = this.head;
            let count = 0 ;
            while (count<index){
                previous = current;
                current =current.next;
                count++;
            }
            //3.Add new node
            newNode.next = current;
            previous.next = newNode;
            this.length++;

        }
    }
    print(){
        let current = this.head;
        let result = "";
        while(current !=null){
            result += `${current.data}->`;
            current = current.next;
        }
        console.log(result);
        console.log(`Length of Linked List ${this.length}`);
    }
    printElement(index){
        if(index<0 || index>=this.length){
            console.log(`linked list index is out of bound`);
        }
        else{
            let current =this.head;
            let count = 0 ;
            while(current){
                if(count == index){
                    console.log(`Index-> ${index} Value-> ${current.data}`);
                }
                count++;
                current = current.next;
            }
        }
    }
    removeAtStart(){
        if(this.head == null){
            console.log('Linked List is already empty');
        }else{
            let temp = this.head;
            this.head =this.head.next;
            temp = null;
            this.length--;
        }
    }
    removeAt(index){
        if(index == 0 || index >= this.length){
            console.log("Index is out of bound");
        }
        else{
            let current,previous;
            current = this.head;
            //Traversal 
            let count =0;
            while(count<index){
                count++;
                previous = current;
                current = current.next;
            }
            console.log(`Count after loop[ is ${count}`)
            //delete current
            console.log(`deleting ${current.data}`);
            previous.next = current.next;
            current = null;
            this.length--;
        }
    }
}

const x = new SinglyLinkedList();

x.insertAtStart(100);
x.insertAtStart(200);
x.insertAtEnd(150);
x.insertAtEnd(300);
x.insertAtIndex(450,2);
x.print();
x.printElement(2);