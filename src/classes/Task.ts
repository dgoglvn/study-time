export class Task {
    public id: number;
    public text: string;
    public completed: boolean;

    constructor(text: string, completed: boolean) {
        this.id = Math.floor(Math.random() * 1000000);
        this.text = text;
        this.completed = completed;
    }

    toggleComplete() {
        this.completed = !this.completed;
    }
}