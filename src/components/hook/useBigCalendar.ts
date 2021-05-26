import { useState } from "react";
import { Event, momentLocalizer, stringOrDate } from 'react-big-calendar'
import moment from 'moment';
export const useBigCalendar = () => {
    const [draggedEvent, setDraggedEvent] = useState<Event | undefined>()
    const [events, setEvents] = useState<Event[] | undefined>()

    const m = moment;
    m.locale('it')
    const localizer = momentLocalizer(m)

    const handleDragStart = (event: Event) => {
        setDraggedEvent(event);
    }

    const dragFromOutsideItem = () => {
        return draggedEvent
    }

    const onDropFromOutside = ({ start, end, allDay }: { start: Date, end: Date, allDay: boolean }) => {
        if (draggedEvent) {
            const event = {
                //id: draggedEvent.id,
                title: draggedEvent.title,
                start,
                end,
                allDay: allDay,
            }

            setDraggedEvent(undefined);
            moveEvent({ event, start, end })
        }
        console.log('onDropFromOutside', start, end, allDay)
    }

    const moveEvent = ({ event, start, end, isAllDay: droppedOnAllDaySlot }: { event: Event, start: stringOrDate, end: stringOrDate, isAllDay?: boolean }) => {
        if (events) {
            let allDay = event.allDay

            if (!event.allDay && droppedOnAllDaySlot) {
                allDay = true
            } else if (event.allDay && !droppedOnAllDaySlot) {
                allDay = false
            }
            debugger;
            //sistemare quanto sotto
            // const nextEvents = events.map(existingEvent => {
            //     return existingEvent.id == event.id
            //         ? { ...existingEvent, start, end, allDay }
            //         : existingEvent
            // })

            // setEvents(nextEvents)
        }
        console.log('moveEvent', event, start, end, droppedOnAllDaySlot)
    }

    const resizeEvent = ({ event, start, end }: { event: Event, start: Date, end: Date }) => {
        if (events) {

            debugger;
            //sistemare quanto sotto
            // const nextEvents = events.map(existingEvent => {
            //     return existingEvent.id == event.id
            //         ? { ...existingEvent, start, end }
            //         : existingEvent
            // })

            // setEvents(nextEvents)
        }
        alert(`${event.title} was resized to ${start}-${end}`)
    }

    const newEvent = (_event: Event) => {
        if (_event !== undefined) {
            console.log(
                `selected slot: \n\nstart ${_event.start} ` +
                `\nend: ${_event.end}` +
                `\naction: ${_event}`
            )
        }
        // let idList = this.state.events.map(a => a.id)
        // let newId = Math.max(...idList) + 1
        // let hour = {
        //   id: newId,
        //   title: 'New Event',
        //   allDay: event.slots.length == 1,
        //   start: event.start,
        //   end: event.end,
        // }
        // this.setState({
        //   events: this.state.events.concat([hour]),
        // })
    }
    return {
        localizer,
        events,
        handleDragStart,
        dragFromOutsideItem,
        onDropFromOutside,
        moveEvent,
        resizeEvent,
        newEvent
    };
};
