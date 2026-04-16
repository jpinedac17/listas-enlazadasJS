const SimpleNode = require("./SimpleNode");

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  addFirst(value) {
    const newNode = new SimpleNode(value);
    newNode.next = this.head;
    this.head = newNode;
    if (this.tail === null) {
      this.tail = newNode;
    }
    this._size++;
  }

  addLast(value) {
    const newNode = new SimpleNode(value);
    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this._size++;
  }

  removeFirst() {
    if (this.head === null) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    this._size--;
    return value;
  }

  contains(value) {
    let current = this.head;
    while (current !== null) {
      if (this._isSameValue(current.value, value)) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  countOccurrences(value) {
    let count = 0;
    let current = this.head;

    while (current !== null) {
        if (this._isSameValue(current.value, value)) {
            count++;
        }
        current = current.next;
    }

    return count;
  }

  clean() {
    let count = 0;
    let current = this.head;

    while (current !== null) {
        let next = current.next; // guarda el siguiente
        current.next = null;     // desconecta el nodo actual
        current = next;          // avanza
        count++;
    }

    // dejar la lista vacía
    this.head = null;
    this.tail = null;
    this.size = 0;

    return count;
  }

  reverseInPlace() {
    let previous = null;
    let current = this.head;
    let next = null;

    // el tail original será el nuevo head al final
    this.tail = this.head;

    while (current != null) {
      next = current.next;   // guardamos el siguiente
      current.next = previous  // invertimos el enlace
      previous = current;         // avanzamos previous
      current = next;             // avanzamos current
    }

    // al final previous queda como nuevo head
    this.head = previous;
  }

  removeDuplicates() {
    let removedCount = 0;
    let current = this.head;

    while (current != null) {
      let runner = current;

      while (runner.next != null) {
        if (this._isSameValue(current.value, runner.next.value)) {
          // eliminar el nodo duplicado
          runner.next = runner.next.next
          this.size--;
          removedCount++;

          // actualizar tail si eliminamos el último
          if (runner.next == null) {
            this.tail = runner;
          }
        } else {
          runner = runner.next;
        }
      }

      current = current.next
    }
    return removedCount;
  }

  size() {
    return this._size;
  }

  isEmpty() {
    return this._size === 0;
  }

  toString() {
    let out = "[";
    let current = this.head;
    while (current !== null) {
      out += String(current.value);
      if (current.next !== null) {
        out += ", ";
      }
      current = current.next;
    }
    out += "]";
    return out;
  }

  _isSameValue(left, right) {
    return left === right;
  }
}

module.exports = SinglyLinkedList;
