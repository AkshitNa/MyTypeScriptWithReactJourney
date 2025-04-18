//Abstract Class
abstract class Tree {
    abstract grow(): void;
  
    water(): void {
      console.log("Watering the tree...");
    }
  }
  
  class AppleTree extends Tree {
    grow(): void {
      console.log("Apple tree is growing 🍎");
    }
  }
  
  const myTree = new AppleTree();
  myTree.water(); // ✅ Inherited from Tree
  myTree.grow();  // ✅ Defined in AppleTree
  
  // const tree = new Tree(); ❌ Error: Cannot create instance of abstract class
  