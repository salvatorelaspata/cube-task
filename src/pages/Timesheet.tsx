import { Grid, Paper } from "@material-ui/core";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, CalendarProps, momentLocalizer } from 'react-big-calendar';
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import moment from 'moment';
import clsx from "clsx";
import React, { useState, ComponentType } from "react";
import { useStyles } from "../components/hook/useStyles";
import StandardContainer from "../components/layout/StandardContainer";
import { useBigCalendar } from '../components/hook/useBigCalendar';
import FormDialog from "../components/Dialog/FormDialog";
import { parseJsonSourceFileConfigFileContent } from "typescript";

const Timesheet: React.FC = () => {
    const { localizer, moveEvent } = useBigCalendar();
    const [show, setShow] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);

    const [info, setInfo] = useState<string>("");
    const DnDCalendar = withDragAndDrop<any, object>(Calendar as ComponentType<CalendarProps<any, object>>)
    const classes = useStyles();



    const onEventDrop = (data: any) => {
        console.log(data);
    };

    const slotClick = (slotInfo: any) => {
        let data = slotInfo.start.toLocaleString();
        setShow(true);
        setOpen(true)
        setInfo(data);
    }

    const myEventsList: any[] = [
        {
            start: new Date(), end: new Date(), title: "special event", ore_selzionate: "8"
        },
        {
            start: new Date(), end: new Date(), title: "special event 2", ore_selzionate: "8"
        }
    ];

    return (
        <>
            {show ? <FormDialog title="Aggiungi Evento" data={info} open={open} stato={setOpen} /> : null}
            <DnDCalendar
                defaultDate={moment().toDate()}
                onEventDrop={moveEvent}
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
