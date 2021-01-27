const initialData = {
  tasks: {
    "task-1": {
      id: "task-1",
      content: "what ever",
    },
    "task-2": {
      id: "task-2",
      content: "what nothing",
    },
    "task-3": {
      id: "task-3",
      content: "what do",
    },
    "task-4": {
      id: "task-4",
      content: "what not",
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To-Do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
    "column-2": {
      id: "column-2",
      title: "to-Do-to-do",
      taskIds: ["task-1.1", "task-2.2", "task-3.3", "task-4.4"],
    },
  },
  columnOrder: ["column-1",],
};

export default initialData;
