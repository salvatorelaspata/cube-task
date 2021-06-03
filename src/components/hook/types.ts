export interface newEventProp {
    info: string,
    event: string,
    ore: string
}
export interface eventDropProps {
    start: Date,
    end: Date,
    event: {
        title: string
    }
}