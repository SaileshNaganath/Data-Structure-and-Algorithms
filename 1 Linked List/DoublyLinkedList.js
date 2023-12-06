class Node{
    constructor(data){
        this.previous = null;
        this.data = data;
        this.next = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }
    insertAtStart(data){
        let newNode = new Node(data);
        newNode.next = this.head;
        newNode.previous = null;
        if(this.head != null) this.head.previous =newNode;
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
            newNode.previous =current;
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
            current.previous = newNode;
            newNode.previous = previous;
            this.length++;

        }
    }
    print(){
        let current = this.head;
        let result = "null";
        while(current !=null){
            result += `<- ${current.data} ->`;
            current = current.next;
        }
        console.log(result + "null" );
        console.log(`Length of Doubly Linked List ${this.length}`);
    }
}

const x = new DoublyLinkedList();
x.insertAtStart(100);
x.insertAtStart(400);
x.insertAtStart(200);
x.insertAtStart(10);
x.insertAtEnd(340);
x.insertAtEnd(740);
x.insertAtIndex(101,1);
x.print();