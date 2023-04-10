class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    append(value) {
        let node = this.head;
        while (node.next) {
            node = node.next;
        }
        node.next = new Node(value);
    }

    prepend(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
    }

    size() {
        let node = this.head;
        let size = 1;
        while (node.next) {
            node = node.next;
            size++;
        }
        return size;
    }

    getHead() {
        return this.head;
    }

    tail() {
        let node = this.head;
        while (node.next) {
            node = node.next;
        }
        return node;
    }

    at(index) {
        if (index > this.size()) return null;

        let node = this.head;
        for (let i = 0; i < index; i++) {
            if (node.next)
                node = node.next;
        }
        return node;
    }

    pop() {
        let node = this.head;
        while (node.next.next) {
            node = node.next;
        }
        node.next = null;
    }

    contains(value) {
        let node = this.head;
        while (node) {
            if (node.val == value)
                return true;
            node = node.next;
        }
        return false;
    }

    find(value) {
        let node = this.head;
        let i = 0;
        while (node) {
            if (node.val == value)
                return i;
            node = node.next;
            i++;
        }
        return null;
    }

    toString() {
        let str = '';
        let node = this.head;
        while (node) {
            str += `${node.val} -> `;
            node = node.next;
        }
        str += 'null';
        return str;
    }
}

const head = new Node(1);
const list = new LinkedList(head);
console.log('initial list: ', list.toString());

list.append(2);
list.append(5);
list.append(11);
list.prepend(0);
console.log('updated list: ', list.toString());
console.log('size: ', list.size());
console.log('head: ', list.getHead());
console.log('tail: ', list.tail());
console.log('at 1: ', list.at(1));
console.log('at 5: ', list.at(5));

list.pop();
console.log('list after pop: ', list.toString());
console.log('list contains 1: ', list.contains(1));
console.log('list contains 6: ', list.contains(6));
console.log('found index of value 5: ', list.find(5));
console.log('found index of value 9: ', list.find(9));