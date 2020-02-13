class Node:
    def __init__(self,key):
        self.left = None
        self.right = None
        self.val = key

def inOrder(node):
    if node.left is None and node.right is None:
        print(node.val)
        return
    if node.left is not None:
        inOrder(node.left)
    print(node.val)
    if node.right is not None:
        inOrder(node.right)

def preOrder(node):
    if node.left is None and node.right is None:
        print(node.val)
        return
    if node.left is not None:
        preOrder()
dashrad = Node('Dashrad')
ram = Node('ram')
Laxman = Node('Laxman')
luv = Node('Luv')
Kush = Node('Kush')
dashrad.left = ram
dashrad.right = Laxman
ram.left = luv
# ram.right = Kush
print(dashrad)
inOrder(dashrad)
        
    
        