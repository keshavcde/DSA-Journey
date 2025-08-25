// class definition of a node for a binary tree

// ---> this is representation of BT in js 
class Node{
    constructor(val){
        this.val=val;
        this.right=null;
        this.left=null;
    }
}
let root=new Node(1);
root.right=new Node(2);
root.left=new Node(3);
root.left.right=new Node(5);