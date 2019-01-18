import { ITask } from "../interfaces";

export const taskObjectValuesIsEmpty= ({ title, description }: ITask) => (title==='' || description==='') ? true : false
