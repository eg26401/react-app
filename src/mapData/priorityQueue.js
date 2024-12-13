

class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(value, priority) {
        const newNode = new Node(value, priority);
        let added = false;

        for (let i = 0; i < this.queue.length; i++) {
            if (this.queue[i].priority > priority) {
                this.queue.splice(i, 0, newNode);
                added = true;
                break;
            }
        }

        if (!added) {
            this.queue.push(newNode);
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Priority Queue is empty");
        }
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}
