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
import AddEventDialog from "../components/Dialog/AddEventDialog";
import { EventProp } from "../components/hook/types"

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const Timesheet: React.FC = () => {
    const [defaultDate, setDefaultDate] = useState<Date>(moment().toDate());
    const [view, setView] = useState<View>("month");
    //const [action, setAction] = useState<NavigateAction>("TODAY");


    const onCalendarNavigate = (
        newDate: Date,
        view: View,
        action: NavigateAction
    ) => {
        setDefaultDate(newDate);
        setView(view);
        //setAction(action);
    };

    const {
        localizer,
        events,
        open,
        setOpen,
        onEventDrop,
        onSelectSlot,
        saveEvent,
        editEvent,
        onEditEvent,
        onDeleteEvent,
        isNew,
        resizeEvent
    } = useBigCalendar();

    const CalendarWithDnD = withDragAndDrop<any, object>(
        Calendar as ComponentType<CalendarProps<any, object>>
    );
    const DnDCalendar = useMemo(() => CalendarWithDnD, [CalendarWithDnD]);

    const initialEvent = {
        start: "",
        end: "",
        title: "",
        ore: "",
        slots: []
    };

    const [currentEvent, setCurrentEvent] = useState<EventProp>(initialEvent);

    return (
        <>
            {open && (
                <AddEventDialog
                    open={open}
                    setOpen={setOpen}
                    isNew={isNew}
                    saveEvent={saveEvent}
                    editEvent={editEvent}
                    currentEvent={currentEvent}
                    setCurrentEvent={setCurrentEvent}
                    onDeleteEvent={onDeleteEvent}
                />
            )}
            <DnDCalendar
                defaultDate={defaultDate}
                onNavigate={onCalendarNavigate}
                onEventDrop={onEventDrop}
                onEventResize={resizeEvent}
                localizer={localizer}
                events={events}
                selectable={true}
                view={view}
                onView={setView}
                onSelectEvent={(event) => onEditEvent(event, setCurrentEvent)}
                onSelectSlot={(slotInfo) => onSelectSlot(slotInfo, setCurrentEvent)}
                startAccessor="start"
                endAccessor="end"
                style={{ height: "90vh", padding: 10 }}
            />
        </>
    );
};

export default Timesheet;
