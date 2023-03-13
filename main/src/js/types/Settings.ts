export type Task = {
    title: string,
    description: string,
}

export type TaskGroup = {
    title: string,
    data: Task[],
}


export type Settings = {
    Todo: TaskGroup[],
}

