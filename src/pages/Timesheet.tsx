import React, { ComponentType } from "react";
import moment from 'moment';

import { Calendar, CalendarProps } from 'react-big-calendar';
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import { useBigCalendar } from '../components/hook/useBigCalendar';
import FormDialog from "../components/Dialog/FormDialog";

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const Timesheet: React.FC = () => {
    const {
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
    } = useBigCalendar();
    const DnDCalendar = withDragAndDrop<any, object>(Calendar as ComponentType<CalendarProps<any, object>>)

    return (
        <>
            {open ? <FormDialog title="Aggiungi Evento"
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
                events={events}
                selectable={true}
                // onSelectEvent={event => alert(event.title)}
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
