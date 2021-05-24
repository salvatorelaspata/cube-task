import { Grid, Paper } from "@material-ui/core";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import moment from 'moment';
import clsx from "clsx";
import React from "react";
import { useStyles } from "../components/hook/useStyles";
import StandardContainer from "../components/layout/StandardContainer";

const Timesheet: React.FC = () => {
   const classes = useStyles();
   const localizer = momentLocalizer(moment)
   const DnDCalendar = withDragAndDrop<any, object>(Calendar)
   const onEventDrop = (data: any) => {
      console.log(data);
   };

   const myEventsList: any[] = [
      { start: new Date(), end: new Date(), title: "special event" }
   ];
   return (
      <StandardContainer>
         <Grid item xs={12} md={12} lg={12}>
            <Paper className={clsx(classes.paper)}>
               <DnDCalendar
                  defaultDate={moment().toDate()}
                  onEventDrop={onEventDrop}
                  localizer={localizer}
                  events={myEventsList}
                  selectable={true}
                  onSelectEvent={event => alert(event.title)}
                  onSelectSlot={(slotInfo) => alert(
                     `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                     `\nend: ${slotInfo.end.toLocaleString()}` +
                     `\naction: ${slotInfo.action}`
                  )}
                  startAccessor="start"
                  endAccessor="end"
                  style={{ height: 500 }}
               /></Paper>

         </Grid>
      </StandardContainer>
   );
};

export default Timesheet;
