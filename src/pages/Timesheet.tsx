import { Grid, Paper } from "@material-ui/core";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, CalendarProps, momentLocalizer } from 'react-big-calendar';
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import moment from 'moment';
import clsx from "clsx";
import React, { ComponentType } from "react";
import { useStyles } from "../components/hook/useStyles";
import StandardContainer from "../components/layout/StandardContainer";
import { useBigCalendar } from '../components/hook/useBigCalendar';

const Timesheet: React.FC = () => {
    const { localizer, moveEvent } = useBigCalendar();
    const DnDCalendar = withDragAndDrop<any, object>(Calendar as ComponentType<CalendarProps<any, object>>)
    const classes = useStyles();
    const onEventDrop = (data: any) => {
        console.log(data);
    };

    const myEventsList: any[] = [
        { start: new Date(), end: new Date(), title: "special event" }
    ];

    return (
        // <StandardContainer>
        //     <Grid item xs={12} md={12} lg={12}>
        //         <Paper className={clsx(classes.paper)}>
        <DnDCalendar
            defaultDate={moment().toDate()}
            onEventDrop={moveEvent}
            localizer={localizer}
            events={myEventsList}
            selectable={true}
            onSelectEvent={event => alert(event.title)}
            onSelectSlot={(slotInfo) => alert(
                `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                `\nend: ${slotInfo.end.toLocaleString()}` +
                `\naction: ${slotInfo.action}`
            )}
            popup={true}
            startAccessor="start"
            endAccessor="end"
            style={{ height: '90vh', padding: 10 }}
        />
        //         </Paper >
        //     </Grid >
        // </StandardContainer >
    );
};

export default Timesheet;
