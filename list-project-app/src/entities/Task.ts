import { PrismaClient } from "../generated/prisma";
const prisma = new PrismaClient();

export class Task implements TaskInterface {
    id: number;
    title: string;
    description?: string;
    status: string;

    async createTask(title: string, status: string, description?: string) {
        try {
            await prisma.task.create({
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

    getId() {
        return this.id;
    }

    setId(id: number) {
        this.id = id;
        return;
    }

    async getTask(id: number) {

        try {

            const task = prisma.task.findUnique({
                where: {
                    id: id | this.id
                }
            })

            return task;

        } catch (e) {
            throw new Error("Erro ao buscar atividade")
        }

    }

    async getTasks() {
        try {
            const tasks = prisma.task.findMany();

            return tasks;
        } catch (e) {
            throw new Error("Erro ao buscar atividades")
        }

    }

    async updateTask(id: number, body: TaskBody) {
        try {
            await prisma.task.findUnique({
                where: {
                    id: id,
                    title: body.title,
                    description: body.description,
                    status: body.status
                },
            })
            return "Atividade atualizada com sucesso"

        } catch (e) {
            console.log(e);
            throw new Error("Erro ao atualizar atividade");
        }
    }

    setTitle(title: string) {
        this.title = title;
        return;
    }

    setDescription(description: string) {
        this.description = description;
        return;
    }

    setStatus(status: string) {
        this.status = status;
        return;
    }
}