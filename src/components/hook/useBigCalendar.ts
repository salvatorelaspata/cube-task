import { useEffect, useState } from "react";
import { Event, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { EventDropProp, EventProp, SlotProp } from "./types";

const initialEvent = {
    info: "",
    event: "",
    ore: "",
};

export const useBigCalendar = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [open, setOpen] = useState<boolean>(false);
    const [currentEvent, setCurrentEvent] = useState<EventProp>(initialEvent);

    const [isNew, setIsNew] = useState<boolean>(true);

    const m = moment;
    m.locale("it");
    const localizer = momentLocalizer(m);

    useEffect(() => {
        let arr = [
            {
                start: new Date(),
                end: new Date(),
                title: "special event 1",
            },
            {
                start: new Date(),
                end: new Date(),
                title: "special event 2",
            },
        ];
        setEvents(arr);
    }, []);

    // Evento scatenato al click su uno slot del calendario (create)
    const onSelectSlot = (slotInfo: SlotProp) => {
        debugger;
        if (slotInfo && slotInfo.start) {
            const info = slotInfo.start;

            setCurrentEvent({ ...initialEvent, info });
            setIsNew(true);
            setOpen(true);
        }
    };

    // Evento scatenato al drag&drop dell'evento (edit)
    const onEventDrop = (event: EventDropProp) => {
        if (
            event &&
            event.start &&
            event.end &&
            event.event &&
            event.event.title
        ) {
            const { start, end } = event;
            const s = start as Date | undefined;
            const e = end as Date | undefined;
            const { title } = event.event;
            const idx = events.indexOf(event.event);

            events[idx] = { ...event.event, start: s, end: e, title };
            const nextEvents = [...events];
            setEvents(nextEvents);
        }
    };

    // Evento scatenato al click su un evento (edit)
    const onEditEvent = (event: Event) => {
        if (event && event.start && event.title) {
            let [title, ore] = event.title.split(" ");

            let updateEvent: EventProp = {
                info: event.start,
                event: title,
                ore: ore,
            };
            setCurrentEvent(updateEvent);
        }
        setIsNew(false);
        setOpen(true);
    };

    //Creazione evento (save)
    const saveEvent = () => {
        debugger;
        const { info, event, ore } = currentEvent;

        if (event === "") {
            alert("Inserire la commessa");
            return;
        }
        if (ore === "") {
            alert("Inserire le ore lavorate");
            return;
        }
        let obj = {
            start: info,
            end: info,
            title: `${event} ${ore} ora/e lavorate`,
        };
        let arr: any = [...events, obj];

        setEvents(arr);
        setOpen(false);

        setCurrentEvent(initialEvent);
    };

    //Modifica evento (edit)
    const editEvent = () => {
        const { event, ore } = currentEvent;

        if (event === "") {
            alert("Inserire la commessa");
            return;
        }
        if (ore === "") {
            alert("Inserire le ore lavorate");
            return;
        }
        let obj: any = {
            start: currentEvent.info,
            end: currentEvent.info,
            title: `${event} ${ore} ora/e lavorate`,
        };
        let idx = events.indexOf(obj);

        const nextEvents = [...events];

        nextEvents.splice(idx, 1, obj);

        setEvents(nextEvents);
        setOpen(false);
        setIsNew(true);
        setCurrentEvent(initialEvent);
    };

    return {
        localizer,
        events,
        saveEvent,
        onEventDrop,
        onSelectSlot,
        open,
        setOpen,
        currentEvent,
        setCurrentEvent,
        onEditEvent,
        isNew,
        editEvent,
    };
};
