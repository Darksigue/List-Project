interface TaskInterface {
    id: number;
    title: string;
    description?: string;
    status: string;

    createTask(title: string, status: string, description?: string): Promise<string>;
    getId(): number;
    setId(id: number): void;
    getTask(id: number): unknown;
    getTasks(): unknown;
    updateTask(id: number, body: TaskBody): void;
    setTitle(title: string): void;
    setDescription(description: string): void;
    setStatus(status: string): void;
}

interface TaskBody {
    id: number;
    title: string;
    description?: string;
    status: string;
}