import { Fab, Grid, Paper, Switch } from "@material-ui/core";
import clsx from "clsx";
import React, { useMemo } from "react";
import { useStyles } from "../components/hook/useStyles";
import StandardContainer from "../components/layout/StandardContainer";
import AddIcon from "@material-ui/icons/Add";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useTodo } from "../components/hook/useTodo";
import { ToDoProp } from "../components/hook/types";
import AddToDoDialog from "../components/Dialog/AddToDoDialog";

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

const ToDo: React.FC = () => {
    const {
        isDnd,
        setIsDnd,
        lists,
        onDragEnd,
        open,
        setOpen,
        saveToDo,
        editToDo,
    } = useTodo();
    const classes = useStyles();

    const onChangeView = () => {
        setIsDnd(!isDnd);
    };

    const openCreateDialog = () => {
        setOpen(true);
    };
    const dialog = (
        <AddToDoDialog
            open={open}
            setOpen={setOpen}
            isNew={true}
            saveToDo={(obj: ToDoProp) => saveToDo(obj)}
            editToDo={(obj: ToDoProp) => editToDo(obj)}
        />
    );
    const addToDo = useMemo(() => dialog, [dialog]);

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
                                {Object.entries(lists).map((entry) => {
                                    const [key, obj] = entry;
                                    const { title, list } = obj;

                                    return (
                                        <Droppable key={key} droppableId={key}>
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    style={getListStyle(
                                                        snapshot.isDraggingOver
                                                    )}
                                                >
                                                    <h2>{title}</h2>
                                                    {list.map(
                                                        (
                                                            e: ToDoProp,
                                                            i: number
                                                        ) => {
                                                            return (
                                                                <Draggable
                                                                    key={e.id}
                                                                    draggableId={
                                                                        e.title
                                                                    }
                                                                    index={i}
                                                                >
                                                                    {(
                                                                        provided,
                                                                        snapshot
                                                                    ) => (
                                                                        <div
                                                                            ref={
                                                                                provided.innerRef
                                                                            }
                                                                            {...provided.draggableProps}
                                                                            {...provided.dragHandleProps}
                                                                            style={getItemStyle(
                                                                                snapshot.isDragging,
                                                                                provided
                                                                                    .draggableProps
                                                                                    .style
                                                                            )}
                                                                        >
                                                                            {
                                                                                e.title
                                                                            }
                                                                            <br />
                                                                            {
                                                                                e.text
                                                                            }
                                                                        </div>
                                                                    )}
                                                                </Draggable>
                                                            );
                                                        }
                                                    )}

                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>
                                    );
                                })}
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
                onClick={openCreateDialog}
            >
                <AddIcon />
            </Fab>

            {open && addToDo}
        </StandardContainer>
    );
};

export default ToDo;
