class Node{
    constructor(element)
    {
      this.element = element
      this.next = null
    }
  }
  
  // ////////////////////////////////////////////////////////
  
  class Linked{
    constructor(){
      this.head = null
      this.size = 0
    }
    add(data)
    {
      var node = new Node(data)
      var current;
      if ( this.head == null)
        {
          this.head = node
        }
      else
        {
          current= this.head
          while(current.next)
            {
              current = current.next
            }
          current.next = node
        }
      this.size += 1
    }
    
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    print(){
      var current = this.head
      console.log("<-----------------------printing the node------------------------>")
      while(current)
        {
         console.log(current.element)
          current = current.next
  
        }
    }
   
   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    reverse(){
      var prev = null
      var current = this.head
      while(current!= null)
      {
        var next = current.next
        current.next = prev
        prev = current
        current = next
      }
      this.head = prev
            }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    findmid(){
     var slow = this.head
     var fast = this.head
     if(this.head!=null)
       {
         if(this.size %2 !=0)
           {
             while(fast.next != null && slow.next!=null)
              {
                  fast = fast.next.next
                    slow = slow.next  
              }
      console.log(slow)
           }
         else
           {
              while(fast.next.next != null && slow.next!=null)
              {
                  fast = fast.next.next
                    slow = slow.next  
                console.log(fast)
              }
             console.log(slow.element)
             console.log(slow.next.element)
           }``
         
    }  
      else
        {
          console.log("list is empyty")
        }
    }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    loopcheck(){
      console.log("-----------------------loop check ---------------------")
      
     var fast = this.head
     var slow = this.head
     while(slow && fast && fast.next)
       {
         slow = slow.next
         fast = fast.next.next
         if(slow == fast)
           {
             console.log("loop detected")
             return 
           }
        
       }
      console.log("no loop")
    }
  }
  
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  
  var ll = new Linked()
  var one = new Node('1')
  var two = new Node('2')
  var three = new Node('3')
  var four = new Node('4')
  var five = new Node('5')
  ll.head = one
  one.next = two
  two.next = three
  three.next = four
  four.next = five
  // five.next = three
  
  ll.loopcheck()
  // ll.reverse()
  // ll.print()
  // ll.findmid()
  