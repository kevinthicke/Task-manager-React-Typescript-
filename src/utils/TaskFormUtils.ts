import { ITask } from "../interfaces";

export const taskObjectValuesIsEmpty = ({ title, description }: ITask) => {
    return (title==='' || description==='') ? true : false
}

export const textIsTooLong = (max: number, description: string) => {
    return (description.length >= max) ? true : false;
} 