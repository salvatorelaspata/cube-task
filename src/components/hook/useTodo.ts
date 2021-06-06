import { useState } from "react";
import {
    DraggableLocation,
    DropResult,
    //ResponderProvided,
} from "react-beautiful-dnd";
import { ListsToDoProp, State, ToDoProp, ToDoProps } from "./types";

const initialListToDo: ListsToDoProp = {
    todo: {
        id: 1,
        title: "ToDo",
        list: [{ id: 1, title: "Titolo 1", state: "todo", text: "Text 1" }],
    },
    inProgress: {
        id: 2,
        title: "In Progress",
        list: [
            {
                id: 11,
                title: "Titolo 11",
                state: "inProgress",
                text: "Text 11",
            },
            {
                id: 22,
                title: "Titolo 22",
                state: "inProgress",
                text: "Text 22",
            },
        ],
    },
    completed: {
        id: 3,
        title: "Completed",
        list: [],
    },
    suspend: {
        id: 4,
        title: "Suspend",
        list: [],
    },
};

/**
 * Moves an item from one list to another list.
 */
const move = (
    source: ToDoProps,
    destination: ToDoProps,
    droppableSource: DraggableLocation,
    droppableDestination: DraggableLocation
) => {
    const sourceClone = Array.from(source.list);
    const destClone = Array.from(destination.list);
    const [removed] = sourceClone.splice(droppableSource.index, 1);
    destClone.splice(droppableDestination.index, 0, removed);

    return [sourceClone, destClone];
};

const reorder = (
    currentList: ToDoProps,
    startIndex: number,
    endIndex: number
) => {
    const result = Array.from(currentList.list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

export const useTodo = () => {
    const [isDnd, setIsDnd] = useState<boolean>(true);
    const [lists, setLists] = useState<ListsToDoProp>(initialListToDo);
    const [open, setOpen] = useState<boolean>(false);

    const getList: any = (id: State) => lists[id];

    const onDragEnd = (
        result: DropResult /*, provided: ResponderProvided*/
    ) => {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }

        const l = Object.assign({}, lists);
        if (source.droppableId === destination.droppableId) {
            const items = reorder(
                getList(source.droppableId || ""),
                source.index,
                destination.index
            );

            l[source.droppableId as State].list = items;
        } else {
            const [s, d] = move(
                getList(source.droppableId),
                getList(destination.droppableId),
                source,
                destination
            );

            l[source.droppableId as State].list = s;
            l[destination.droppableId as State].list = d;
        }
        setLists(l);
    };

    const saveToDo = (obj: ToDoProp) => {
        let l = Object.assign({}, lists);
        l[obj.state].list = [obj].concat(l[obj.state].list);
        setLists(l);
        setOpen(false);
    };
    const editToDo = (obj: ToDoProp) => {};

    return {
        isDnd,
        setIsDnd,
        lists,
        onDragEnd,
        open,
        setOpen,
        saveToDo,
        editToDo,
    };
};
