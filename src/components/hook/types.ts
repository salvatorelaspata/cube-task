import { stringOrDate, Event } from "react-big-calendar";

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
