class Node
    {
    constructor(element){
        this.element = element
        this.next = null
    }
}

////////////////////////////////////////////
class Linked{
    constructor()
    {
        this.head = null
        this.size = 0
    }

// ///////////////////////////////////////
    tellsize()
    {
        console.log(this.size)
    }

// ///////////////////////////////////////
    add(data){
        var node = new Node(data)
        var current;
        if(this.head == null)
        {
            this.head = node
        }
        else
        {
            current = this.head
            while(current.next)
            {
                current = current.next
            }
            current.next = node 
        }
        this.size += 1
    }

 /////////////////////////////////////////////
    mid()
    {

        var fast = this.head
        var slow = this.head
        var elem = []
        if(this.head != null)
        {
            if(this.size % 2 ==0)
            {
                while(fast.next.next!= null && slow.next != null )
                {
                    fast = fast.next.next
                    slow = slow.next
                }
                console.log(slow)
                console.log(slow.next)
            }
            else
             {
                while(fast.next!= null && slow.next != null )
                {
                    fast = fast.next.next
                    slow = slow.next
                }
                console.log(slow)
             }
        }
    }
// ///////////////////////////////////////////
    printnode(){
        console.log("printing linked list")
        var current = this.head
        var ansstr = ''
        while(current)
        {
            ansstr = ansstr + current.element + ' '
            current = current.next
        }
        console.log(ansstr)
    }
}


// ////////////////////////////////////////////
var ll = new Linked()

sll.printnode()


var ar1 = [1,2,3,4,5,6,7]

for(var a=0;a<ar1.length;a++)
{
    ll.add(ar1[a])
}

ll.printnode()
ll.mid()
// ///////////////////////////////////////////////