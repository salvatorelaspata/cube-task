import { useEffect, useState } from "react";
import { Event, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import { newEventProp } from './types';

const initialNewEvent = {
    info: '',
    event: '',
    ore: ''
};

export const useBigCalendar = () => {
    const [events, setEvents] = useState<Event[]>([])
    const [open, setOpen] = useState<boolean>(false);
    const [newEvent, setNewEvent] = useState<newEventProp>(initialNewEvent);

    useEffect(() => {
        let arr = [{
            start: new Date(), end: new Date(), title: "special event 1"
        },
        {
            start: new Date(), end: new Date(), title: "special event 2"
        }]
        setEvents(arr)
    }, [])

    const m = moment;
    m.locale('it')
    const localizer = momentLocalizer(m)

    const onEventDrop = (event: any) => {
        const { start, end } = event
        const idx = events.indexOf(event)
        const updatedEvent = { ...event, start, end }
        const nextEvents = [...events]

        nextEvents.splice(idx, 1, updatedEvent)
        setEvents(nextEvents)
    }


    const slotClick = (slotInfo: any) => {
        let data = slotInfo.start;
        setOpen(true)

        setNewEvent({ ...newEvent, info: data });
    }
    const saveEvent = () => {
        const { info, event, ore } = newEvent;
        let obj = {
            start: info, end: info, title: `${event} ${ore} ora/e lavorate`,
        }
        let arr: any = [...events, obj];

        setEvents(arr);
        setOpen(false);

        setNewEvent(initialNewEvent)
    }
    return {
        localizer,
        events,
        saveEvent,
        onEventDrop,
        slotClick,
        open,
        setOpen,
        newEvent,
        setNewEvent
    };
};
