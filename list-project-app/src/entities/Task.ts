import { PrismaClient } from "../generated/prisma";
const prisma = new PrismaClient();

export class Task implements TaskInterface {
    id: number;
    title: string;
    description?: string;
    status: string;

    createTask(title: string, status: string, description?: string): string {
        try {
            prisma.task.create({
                data: {
                    title: title,
                    description: description,
                    status: status
                }
            })
            return "Atividade criada com sucesso!";
        } catch (e) {
            console.log(e);
            return "Erro ao criar atividade"
        }
    }

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