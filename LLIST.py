import math
class Node:
    def __init__(self,data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head =None

    def Push(self,new_data):
        new_node = Node(new_data)
        new_node.next = self.head
        self.head = new_node

    def printList(self): 
        temp = self.head 
        print("printintg link list")
        while(temp): 
            print(temp.data), 
            print('\n')
            temp = temp.next
    
    def findmid(self):
        temp = self.head
        s = list()
        while(temp):
            s.append(temp)
            temp = temp.next
        mid = len(s)/2
        print(s[mid].data)
        
        
    def reverse(self):
        prev = None
        current = self.head
        print("reversing the list")
        while current is not None:
            next = current.next
            current.next = prev
            prev = current
            current = next
        self.head = prev        
        
    def detectloop(self):
        s = set()
        temp = self.head
        while(temp):
            if (temp in s):
                print(temp.data)
                return True
            s.add(temp)
            temp = temp.next
        return False

llist = LinkedList()
llist.head = Node(1)
second = Node(2)
third = Node(3)

llist.head.next = second
second.next = third



llist.reverse()
llist.printList()
# llist.findmid()
