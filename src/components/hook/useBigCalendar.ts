import { useEffect, useState } from "react";
import { Event, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { EventDropProp, EventProp, SlotProp } from "./types";

const initialEvent = {
    start: "",
    end: "",
    title: "",
    ore: "",
    slots: []
};

export const useBigCalendar = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [open, setOpen] = useState<boolean>(false);

    const [isNew, setIsNew] = useState<boolean>(true);

    const m = moment;
    m.locale("it");
    const localizer = momentLocalizer(m);

    useEffect(() => {
        let arr = [
            {
                start: new Date(),
                end: new Date(),
                title: "acea 5 ora/e lavorate",
                ore: "5 ora/e lavorate"
            },
            {
                start: new Date(),
                end: new Date(),
                title: "erg 7 ora/e lavorate",
                ore: "7 ora/e lavorate"
            },
        ];
        setEvents(arr);
    }, []);

    // Evento scatenato al click su uno slot del calendario (create)
    const onSelectSlot = (slotInfo: SlotProp, setCurrentEvent: any) => {
        debugger
        if (slotInfo && slotInfo.start && slotInfo.end) {
            const start = slotInfo.start;
            const end = slotInfo.end;
            const slots = slotInfo.slots;

            setCurrentEvent({ ...initialEvent, start, end, slots });
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

    const resizeEvent = (event: any) => {
        const { start, end } = event;

        //sostituire title con id quando ci sarà il db
        const nextEvents = events.map(existingEvent => {
            return existingEvent.title === event.event.title
                ? { ...existingEvent, start, end }
                : existingEvent;
        });

        setEvents(nextEvents);
    }

    // Evento scatenato al click su un evento (edit)
    const onEditEvent = (event: Event, setCurrentEvent: any) => {
        debugger
        if (event && event.start && event.end && event.title) {
            let [title, ore] = event.title.split(" ");

            let updateEvent: EventProp = {
                start: event.start,
                end: event.end,
                title: title,
                ore: ore,
                slots: []
            };
            setCurrentEvent(updateEvent);
        }
        setIsNew(false);
        setOpen(true);
    };

    const onDeleteEvent = (currentEvent: any, setCurrentEvent: any) => {
        const { title, start, end, ore } = currentEvent;
        let item_delete: any = {
            start: start,
            end: end,
            title: `${title} ${ore} ora/e lavorate`,
            ore: ore
        };
        let arr = [...events]; // copia array
        debugger
        let index = arr.indexOf(item_delete);
        if (index === -1) {
            arr.splice(index, 1);
            setEvents(arr);
        }

        setOpen(false);

        setCurrentEvent(initialEvent);

    }

    //Creazione evento (save)
    const saveEvent = (currentEvent: any, setCurrentEvent: any) => {
        let arr: any = [...events];
        let obj: any = {};
        const { start, end, title, ore, slots } = currentEvent;

        if (title === "") {
            alert("Inserire la commessa");
            return;
        }
        if (ore === "") {
            alert("Inserire le ore lavorate");
            return;
        }
        if (slots.length > 2) {
            for (let i in slots) {

                obj = {
                    start: slots[i],
                    end: slots[i],
                    title: `${title} ${ore} ora/e lavorate`,
                    ore: ore
                };
                arr.push(obj);
            }
        } else {
            obj = {
                start: start,
                end: end,
                title: `${title} ${ore} ora/e lavorate`,
                ore: ore
            };
            arr.push(obj)
        }

        setEvents(arr);

        setOpen(false);

        setCurrentEvent(initialEvent);
    };

    //Modifica evento (edit)
    const editEvent = (currentEvent: any, setCurrentEvent: any) => {
        const { title, ore } = currentEvent;

        if (title === "") {
            alert("Inserire la commessa");
            return;
        }
        if (ore === "") {
            alert("Inserire le ore lavorate");
            return;
        }
        let obj: any = {
            start: currentEvent.start,
            end: currentEvent.end,
            title: `${title} ${ore} ora/e lavorate`,
            ore: ore
        };
        debugger
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
        onEditEvent,
        isNew,
        editEvent,
        onDeleteEvent,
        resizeEvent
    };
};
