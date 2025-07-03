interface TaskInterface {
    id: number;
    title: string;
    description?: string;
    status: string;

    getTask(): Promise<TaskInterface | void>;
    getTasks(): Promise<TaskInterface[] | void>;
    setTitle(): void;
    setDescription(): void;
    setStatus(): void;
}