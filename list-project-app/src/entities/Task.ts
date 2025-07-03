export class Task implements TaskInterface {
    id: number;
    title: string;
    description?: string;
    status: string;

    getTask(): Promise<TaskInterface | void> {
        return;
    }

    getTasks(): Promise<TaskInterface[] | void> {
        return;
    }

    setTitle(): void {
        return;
    }

    setDescription(): void {
        return;
    }

    setStatus(): void {
        return;
    }
}