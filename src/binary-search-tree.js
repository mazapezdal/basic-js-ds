

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.rootGood = null;
  }

  root() {
    return this.rootGood;
  }

  
  add(data) {
    this.rootGood = addWithin(this.rootGood, data);

    function addWithin(node, data) {
      if (!node) {
        node = new Node(data);
        return node;
      }

      if (node.data === data) {
        return node;
      }

      if (node.data < data) {
        node.right = addWithin(node.right, data);
      }

      if (node.data > data) {
        node.left = addWithin(node.left, data);
      }

      return node;
    }
  }


  has(data) {
    return searchWithin(this.rootGood, data);

    function searchWithin(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (node.data < data) {
        return searchWithin(node.right, data);
      } else {
        return searchWithin(node.left, data);
      }
    }
  }


  find(data) {
    return searchNode(this.rootGood, data);

    function searchNode(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (node.data < data) {
        return searchNode(node.right, data);
      } else {
        return searchNode(node.left, data);
      }
    }
  }


  remove(data) {
    this.rootGood = removeNode(this.rootGood, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else if (node.data > data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {

        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let currentData = node.right.data;
        let nextNode = node.right.left;

        while (nextNode) {
          currentData = nextNode.data;
          nextNode = nextNode.left;
        }

        node.data = currentData;
        node.right = removeNode(node.right, currentData);

        return node;
      }
    }
  }

  min(firstNode = this.rootGood) {
    if (!firstNode) {
      return null
    }

    let currentNode = firstNode.data
    let nextNode = firstNode.left

    while (nextNode) {
      currentNode = nextNode.data
      nextNode = nextNode.left
    }

    return currentNode
  }

  max(firstNode = this.rootGood) {
    if (!firstNode) {
      return null
    }

    let currentNode = firstNode.data
    let nextNode = firstNode.right

    while (nextNode) {
      currentNode = nextNode.data
      nextNode = nextNode.right
    }

    return currentNode
  }
}

module.exports = {
  BinarySearchTree
};
