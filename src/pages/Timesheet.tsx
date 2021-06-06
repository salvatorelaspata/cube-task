import React, { ComponentType, useMemo, useState } from "react";
import moment from "moment";

import {
    Calendar,
    CalendarProps,
    NavigateAction,
    View,
} from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import { useBigCalendar } from "../components/hook/useBigCalendar";
import FormDialog from "../components/Dialog/FormDialog";

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const Timesheet: React.FC = () => {
    const [defaultDate, setDefaultDate] = useState<Date>(moment().toDate());
    const [view, setView] = useState<View>("month");
    const [action, setAction] = useState<NavigateAction>("TODAY");
    console.log(action);

    const onCalendarNavigate = (
        newDate: Date,
        view: View,
        action: NavigateAction
    ) => {
        setDefaultDate(newDate);
        setView(view);
        setAction(action);
    };

    const {
        localizer,
        events,
        open,
        setOpen,
        currentEvent,
        setCurrentEvent,
        onEventDrop,
        onSelectSlot,
        saveEvent,
        editEvent,
        onEditEvent,
        isNew,
    } = useBigCalendar();

    const CalendarWithDnD = withDragAndDrop<any, object>(
        Calendar as ComponentType<CalendarProps<any, object>>
    );
    const DnDCalendar = useMemo(() => CalendarWithDnD, [CalendarWithDnD]);

    return (
        <>
            {open && (
                <FormDialog
                    open={open}
                    setOpen={setOpen}
                    title={isNew ? "Aggiungi Evento" : currentEvent.event}
                    isNew={isNew}
                    currentEvent={currentEvent}
                    setCurrentEvent={setCurrentEvent}
                    saveEvent={saveEvent}
                    editEvent={editEvent}
                />
            )}
            <DnDCalendar
                defaultDate={defaultDate}
                onNavigate={onCalendarNavigate}
                onEventDrop={onEventDrop}
                localizer={localizer}
                events={events}
                selectable={true}
                view={view}
                onView={setView}
                onSelectEvent={onEditEvent}
                onSelectSlot={onSelectSlot}
                startAccessor="start"
                endAccessor="end"
                style={{ height: "90vh", padding: 10 }}
            />
        </>
    );
};

export default Timesheet;
