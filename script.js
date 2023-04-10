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

    head() {
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
        let node = this.head;
        for (let i = 0; i <= index; i++) {
            node = node.next;
        }
        return node;
    }

    pop() {
        let node = this.head;
        while (node) {
            node = node.next;
        }
        node.next = null;
    }

    contains(value) {
        let node = this.head;
        while (node.next) {
            if (node.val == value)
                return true;
        }
        return false;
    }

    find(value) {
        let node = this.head;
        let i = 0;
        while (node.next) {
            if (node.val == value)
                return i;
            node = node.next;
        }
        return null;
    }

    toString() {
        let str = '';
        let node = this.head;
        while (node.next) {
            str += `${node.val} -> `;
        }
        str += 'null';
        return str;
    }
}