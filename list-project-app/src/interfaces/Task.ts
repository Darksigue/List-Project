interface TaskInterface {
    id: number;
    title: string;
    description?: string;
    status: string;

    createTask(title: string, status: string, description?: string): string;
    getTask(): Promise<TaskInterface | void>;
    getTasks(): Promise<TaskInterface[] | void>;
    setTitle(): void;
    setDescription(): void;
    setStatus(): void;
}