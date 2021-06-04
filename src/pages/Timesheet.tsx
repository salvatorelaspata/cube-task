import React, { ComponentType, useMemo, useState } from "react";
import moment from 'moment';

import { Calendar, CalendarProps, NavigateAction, View } from 'react-big-calendar';
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import { useBigCalendar } from '../components/hook/useBigCalendar';
import FormDialog from "../components/Dialog/FormDialog";

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const Timesheet: React.FC = () => {
    const [defaultDate, setDefaultDate] = useState<Date>(moment().toDate())
    const [view, setView] = useState<View>('month')
    const [action, setAction] = useState<NavigateAction>('TODAY')
    const onCalendarNavigate = (newDate: Date, view: View, action: NavigateAction) => {
        setDefaultDate(newDate);
        setView(view);
        setAction(action);
    }
    const {
        localizer,
        events,
        open,
        newEvent,
        onEventDrop,
        slotClick,
        saveEvent,
        setOpen,
        setNewEvent,
        editEvent,
        isNew,
        modificaEvent,
        saveEditEvent,
        enabledEdit,
        isEdit
    } = useBigCalendar();

    const DnDCalendar = useMemo(() => withDragAndDrop<any, object>(Calendar as ComponentType<CalendarProps<any, object>>), this)

    return (
        <>
            {open && <FormDialog
                title={isNew ? "Aggiungi Evento" : modificaEvent.event}
                isNew={isNew}
                open={open}
                setOpen={setOpen}
                saveEvent={saveEvent}
                newEvent={newEvent}
                setNewEvent={setNewEvent}
                saveEditEvent={saveEditEvent}
                modificaEvent={modificaEvent}
                enabledEdit={enabledEdit}
                isEdit={isEdit}
            />}
            <DnDCalendar
                defaultDate={defaultDate}
                onNavigate={onCalendarNavigate}
                onEventDrop={onEventDrop}
                localizer={localizer}
                events={events}
                selectable={true}
                view={view}
                onView={setView}
                onSelectEvent={editEvent}
                onSelectSlot={slotClick}
                startAccessor="start"
                endAccessor="end"
                style={{ height: '90vh', padding: 10 }}
            />
        </>
    );
};

export default Timesheet;
