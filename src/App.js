// import "./App.css";
import initialData from "./initial-data";
import Column from "./column";
import { DragDropContext } from "react-beautiful-dnd";

function App() {
  const state = initialData;
  console.log("state", state);

  const dragEnd = (result) => {
    console.log("result dragEnd", result);
    const { destination, source, draggableId } = result;
    if (!destination) {
      console.log("hi");
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ){
      return;
    }
    const column = state.columns[source.droppableId];
    console.log("column dragEnd",column);
    const newTaskIds = Array.from(column.taskIds);
  };

  return (
    <DragDropContext onDragEnd={dragEnd}>
      {state.columnOrder.map((columnId) => {
        console.log("columnId", columnId);
        const column = state.columns[columnId];
        console.log("column :", column);
        const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);
        console.log("tasks", tasks);
        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  );
}

export default App;
