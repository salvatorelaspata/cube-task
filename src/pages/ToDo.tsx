import { Fab, Grid, Paper, Switch } from "@material-ui/core";
import clsx from "clsx";
import React, { useState } from "react";
import { useStyles } from "../components/hook/useStyles";
import StandardContainer from "../components/layout/StandardContainer";
import AddIcon from "@material-ui/icons/Add";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

interface ListInterface {
   id: number;
   text: string;
}

interface Lists {
   todo: ListInterface[];
   inProgress: ListInterface[];
   completed: ListInterface[];
   suspend: ListInterface[];
   deleted: ListInterface[];
}

const ToDo: React.FC = () => {
   const classes = useStyles();

   const [isDnd, setIsDnd] = useState<boolean>(true);

   const [lists, setLists] = useState<Lists>({
      todo: [
         { id: 1, text: "text 1" },
         { id: 2, text: "text 2" },
         { id: 3, text: "text 3" },
         { id: 4, text: "text 4" },
         { id: 5, text: "text 5" },
         { id: 6, text: "text 6" },
         { id: 7, text: "text 7" },
         { id: 8, text: "text 8" },
      ],
      inProgress: [
         { id: 11, text: "text 11" },
         { id: 22, text: "text 22" },
         { id: 33, text: "text 33" },
         { id: 44, text: "text 44" },
         { id: 55, text: "text 55" },
         { id: 66, text: "text 66" },
         { id: 77, text: "text 77" },
         { id: 88, text: "text 88" },
      ],
      completed: [
         { id: 111, text: "text 111" },
         { id: 222, text: "text 222" },
         { id: 333, text: "text 333" },
         { id: 444, text: "text 444" },
         { id: 555, text: "text 555" },
         { id: 666, text: "text 666" },
         { id: 777, text: "text 777" },
         { id: 899, text: "text 888" },
      ],
      suspend: [
         { id: 1111, text: "text 1111" },
         { id: 2222, text: "text 2222" },
         { id: 3333, text: "text 3333" },
         { id: 4444, text: "text 4444" },
         { id: 5555, text: "text 5555" },
         { id: 6666, text: "text 6666" },
         { id: 7777, text: "text 7777" },
         { id: 8888, text: "text 8888" },
      ],
      deleted: [
         { id: 11111, text: "text 11111" },
         { id: 22222, text: "text 22222" },
         { id: 33333, text: "text 33333" },
         { id: 44444, text: "text 44444" },
         { id: 55555, text: "text 55555" },
         { id: 66666, text: "text 66666" },
         { id: 77777, text: "text 77777" },
         { id: 88888, text: "text 88888" },
      ],
   });

   const onChangeView = () => {
      setIsDnd(!isDnd);
   };

   const onDragEnd = (...rest: any[]) => {
      console.table(...rest);
   };

   const grid = 8;
   const getListStyle = (isDraggingOver: boolean) => ({
      background: isDraggingOver ? "lightblue" : "lightgrey",
      padding: grid,
      width: 250,
   });
   const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
      // some basic styles to make the items look a bit nicer
      userSelect: "none",
      padding: grid * 2,
      margin: `0 0 ${grid}px 0`,

      // change background colour if dragging
      background: isDragging ? "lightgreen" : "grey",

      // styles we need to apply on draggables
      ...draggableStyle,
   });
   return (
      <StandardContainer>
         <Grid item xs={12} md={12} lg={12}>
            <Paper className={clsx(classes.paper)}>
               <div
                  style={{
                     display: "flex",
                     justifyContent: "space-between",
                     alignItems: "center",
                     padding: "10px",
                  }}
               >
                  ToDo {` - ${isDnd ? "Drag & Drop" : "Tabella"}`}
                  <Switch
                     onClick={onChangeView}
                     value={isDnd}
                     color="primary"
                  />
               </div>
               {isDnd ? (
                  <div
                     style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                        height: "100%",
                     }}
                  >
                     <DragDropContext onDragEnd={onDragEnd}>
                        {/* {Object.keys((k, index) => { */}
                        <Droppable droppableId="droppableId">
                           {(provided, snapshot) => (
                              <div
                                 ref={provided.innerRef}
                                 style={getListStyle(snapshot.isDraggingOver)}
                              >
                                 <h2>PRESA IN C</h2>
                                 {/* LOOP ITEMS */}
                                 {[1, 2, 3, 4, 5, 6].map((e, i) => {
                                    return (
                                       <Draggable
                                          key={e}
                                          draggableId={e.toString()}
                                          index={i}
                                       >
                                          {(provided, snapshot) => (
                                             <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(
                                                   snapshot.isDragging,
                                                   provided.draggableProps.style
                                                )}
                                             >
                                                {e.toString()}
                                             </div>
                                          )}
                                       </Draggable>
                                    );
                                 })}

                                 {provided.placeholder}
                              </div>
                           )}
                        </Droppable>

                        <Droppable droppableId="droppableId">
                           {(provided, snapshot) => (
                              <div
                                 ref={provided.innerRef}
                                 style={getListStyle(snapshot.isDraggingOver)}
                              >
                                 <h2>PRESA IN C</h2>
                                 {/* LOOP ITEMS */}
                                 {[11, 22, 33, 44, 55, 66, 77].map((e, i) => {
                                    return (
                                       <Draggable
                                          key={e}
                                          draggableId={e.toString()}
                                          index={i}
                                       >
                                          {(provided, snapshot) => (
                                             <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(
                                                   snapshot.isDragging,
                                                   provided.draggableProps.style
                                                )}
                                             >
                                                {e.toString()}
                                             </div>
                                          )}
                                       </Draggable>
                                    );
                                 })}

                                 {provided.placeholder}
                              </div>
                           )}
                        </Droppable>
                        <Droppable droppableId="droppableId2">
                           {(provided, snapshot) => (
                              <div
                                 ref={provided.innerRef}
                                 style={getListStyle(snapshot.isDraggingOver)}
                              >
                                 <h2>C SEMU</h2>
                                 {/* LOOP ITEMS */}
                                 {[11, 22, 33, 44, 55].map((e, i) => {
                                    return (
                                       <Draggable
                                          key={e}
                                          draggableId={e.toString()}
                                          index={i}
                                       >
                                          {(provided, snapshot) => (
                                             <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(
                                                   snapshot.isDragging,
                                                   provided.draggableProps.style
                                                )}
                                             >
                                                {e.toString()}
                                             </div>
                                          )}
                                       </Draggable>
                                    );
                                 })}

                                 {provided.placeholder}
                              </div>
                           )}
                        </Droppable>

                        <Droppable droppableId="droppableId3">
                           {(provided, snapshot) => (
                              <div
                                 ref={provided.innerRef}
                                 style={getListStyle(snapshot.isDraggingOver)}
                              >
                                 <h2>ENNAMO</h2>
                                 {/* LOOP ITEMS */}
                                 {[111, 222, 333, 444, 555].map((e, i) => {
                                    return (
                                       <Draggable
                                          key={e}
                                          draggableId={e.toString()}
                                          index={i}
                                       >
                                          {(provided, snapshot) => (
                                             <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(
                                                   snapshot.isDragging,
                                                   provided.draggableProps.style
                                                )}
                                             >
                                                {e.toString()}
                                             </div>
                                          )}
                                       </Draggable>
                                    );
                                 })}

                                 {provided.placeholder}
                              </div>
                           )}
                        </Droppable>
                     </DragDropContext>
                  </div>
               ) : (
                  <p>tabella</p>
               )}
            </Paper>
         </Grid>
         <Fab
            size="medium"
            color="secondary"
            aria-label="Add Project"
            className={classes.fabMargin}
         >
            <AddIcon />
         </Fab>
      </StandardContainer>
   );
};

export default ToDo;
