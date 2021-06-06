import { stringOrDate, Event } from "react-big-calendar";

/**
 * TIMESHEET
 */
export interface EventProp {
    info: stringOrDate;
    event: string;
    ore: string;
}

export interface SlotProp {
    start: stringOrDate;
    end: stringOrDate;
    slots: Date[] | string[];
    action: "select" | "click" | "doubleClick";
}

export interface EventDropProp {
    event: Event;
    start: stringOrDate;
    end: stringOrDate;
    isAllDay: boolean;
}

/**
 * TODO
 */
export type State = "todo" | "inProgress" | "completed" | "suspend";

export const initialToDo: ToDoProp = {
    id: 0,
    title: "",
    state: "todo",
    text: "",
    attachment: "",
};

export const mockOptions = [
    { key: "todo", value: "ToDo" },
    { key: "inProgress", value: "In Corso" },
    { key: "completed", value: "Completati" },
    { key: "suspend", value: "Sospesi" },
];

export interface ToDoProp {
    id: number;
    title: string;
    state: State;
    text?: string;
    attachment?: string;
}
export interface ToDoProps {
    id: number;
    title: string;
    list: ToDoProp[];
}

export interface ListsToDoProp {
    todo: ToDoProps;
    inProgress: ToDoProps;
    completed: ToDoProps;
    suspend: ToDoProps;
}
