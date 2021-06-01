import { Grid, Paper } from "@material-ui/core";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, CalendarProps, momentLocalizer } from 'react-big-calendar';
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from 'moment';
import clsx from "clsx";
import React, { useState, ComponentType, useEffect } from "react";
import { useStyles } from "../components/hook/useStyles";
import { useBigCalendar } from '../components/hook/useBigCalendar';
import FormDialog from "../components/Dialog/FormDialog";
import { parseJsonSourceFileConfigFileContent } from "typescript";

const Timesheet: React.FC = () => {
    const { localizer, moveEvent } = useBigCalendar();
    const [show, setShow] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);

    const [info, setInfo] = useState<string>("");
    const [event, setEvent] = useState<string>("");
    const [ore, setOre] = useState<string>("");
    const DnDCalendar = withDragAndDrop<any, object>(Calendar as ComponentType<CalendarProps<any, object>>)
    const classes = useStyles();


    const slotClick = (slotInfo: any) => {
        let data = slotInfo.start;
        setShow(true);
        setOpen(true)
        setInfo(data);
    }

    const [myEventsList, setmyEventsList] = useState<any>([])
    useEffect(() => {
        let arr = [{
            start: new Date(), end: new Date(), title: "special event 1"
        },
        {
            start: new Date(), end: new Date(), title: "special event 2"
        }]
        setmyEventsList(arr)
        return () => {

        }
    }, [])

    const onEventDrop = (event: any) => {
        const { start, end } = event
        debugger
        const idx = myEventsList.indexOf(event)
        const updatedEvent = { ...event, start, end }
        const nextEvents = [...myEventsList]
        nextEvents.splice(idx, 1, updatedEvent)
        setmyEventsList(nextEvents)
        debugger
    }

    const saveEvent = () => {
        let obj: any = {
            start: info, end: info, title: event + " " + "" + ore + " " + "ora/e lavorate",
        }
        let arr: any = [...myEventsList, obj];

        setmyEventsList(arr);
        setShow(false);
        setOpen(false);
        setInfo("");
        setOre("");
        setEvent("");
    }


    return (
        <>
            {show ? <FormDialog title="Aggiungi Evento"
                data={info}
                open={open}
                stato={setOpen}
                select={event}
                setSelect={setEvent}
                ore={ore}
                setOre={setOre}
                saveEvent={saveEvent}
            /> : null}
            <DnDCalendar
                defaultDate={moment().toDate()}
                onEventDrop={onEventDrop}
                localizer={localizer}
                events={myEventsList}
                selectable={true}
                onSelectEvent={event => alert(event.title)}
                onSelectSlot={slotClick}
                popup={true}
                startAccessor="start"
                endAccessor="end"
                style={{ height: '90vh', padding: 10 }}
            />
        </>
    );
};

export default Timesheet;
