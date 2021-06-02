import { useEffect, useState } from "react";
import { Event, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
export const useBigCalendar = () => {
    const [events, setEvents] = useState<Event[]>([])

    const [open, setOpen] = useState<boolean>(false);

    const [info, setInfo] = useState<string>("");
    const [event, setEvent] = useState<string>("");
    const [ore, setOre] = useState<string>("");

    useEffect(() => {
        let arr = [{
            start: new Date(), end: new Date(), title: "special event 1"
        },
        {
            start: new Date(), end: new Date(), title: "special event 2"
        }]
        setEvents(arr)
        return () => {

        }
    }, [])

    const onEventDrop = (event: any) => {
        const { start, end } = event
        debugger
        const idx = events.indexOf(event)
        const updatedEvent = { ...event, start, end }
        const nextEvents = [...events]
        nextEvents.splice(idx, 1, updatedEvent)
        setEvents(nextEvents)
        debugger
    }

    const m = moment;
    m.locale('it')
    const localizer = momentLocalizer(m)

    const slotClick = (slotInfo: any) => {
        let data = slotInfo.start;
        setOpen(true)
        setInfo(data);
    }
    const saveEvent = () => {
        let obj: any = {
            start: info, end: info, title: `${event} ${ore} ora/e lavorate`,
        }
        let arr: any = [...events, obj];

        setEvents(arr);
        setOpen(false);
        setInfo("");
        setOre("");
        setEvent("");
    }
    return {
        localizer,
        events,
        saveEvent,
        onEventDrop,
        slotClick,
        info,
        open,
        ore,
        event,
        setOpen,
        setOre,
        setEvent
    };
};
