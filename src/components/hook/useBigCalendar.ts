import React, { useEffect, useState } from "react";
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
    const [modificaEvent, setModificaEvent] = useState<newEventProp>(initialNewEvent);
    const [isNew, setIsNew] = useState<boolean>(true);
    const [isEdit, setIsEdit] = useState<boolean>(false);


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
        const title = event.event.title;
        const idx = events.indexOf(event)
        const updatedEvent = { ...event, start, end, title }
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
        if (event == "") {
            alert("Inserire la commessa");
            return;
        }
        if (ore == "") {
            alert("Inserire le ore lavorate");
            return;
        }
        let obj = {
            start: info, end: info, title: `${event} ${ore} ora/e lavorate`,
        }
        let arr: any = [...events, obj];

        setEvents(arr);
        setOpen(false);
        setIsEdit(false);

        setNewEvent(initialNewEvent)
    }
    //modifico evento
    const editEvent = (e: any) => {
        let title = e.title.split(" ")[0];
        let ore = e.title.split(" ")[1];

        let updateEvent = {
            info: e.start,
            event: title,
            ore: ore
        };
        setModificaEvent(updateEvent);
        setIsNew(false);
        setOpen(true);
    }
    const saveEditEvent = () => {
        if (!isEdit) {
            alert("Cliccare sulla matita per modificare");
            return;
        } else {
            const { info, event, ore } = newEvent;

            if (event == "") {
                alert("Inserire la commessa");
                return;
            }
            if (ore == "") {
                alert("Inserire le ore lavorate");
                return;
            }
            let obj: any = {
                start: modificaEvent.info, end: modificaEvent.info, title: `${event} ${ore} ora/e lavorate`,
            }
            let idx = events.indexOf(obj);

            const nextEvents = [...events]

            nextEvents.splice(idx, 1, obj)

            setEvents(nextEvents)
            setOpen(false);
            setIsEdit(false);
            debugger
        }
    }
    const enabledEdit = () => {
        setIsEdit(true);
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
        setNewEvent,
        editEvent,
        isNew,
        modificaEvent,
        saveEditEvent,
        enabledEdit,
        isEdit
    };
};
