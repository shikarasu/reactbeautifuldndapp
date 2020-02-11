const initialData = {
    tasks: {
    'task-1': {id: 'task-1', content: 'Take out garbage'},
    'task-2': {id: 'task-2', content: 'Wash dishes'},
    'task-3': {id: 'task-3', content: 'Cook dinner'},
    'task-4': {id: 'task-4', content: 'Watch tele'},
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To do',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
        },
    },
    // Facilitate reordering of the columns
    columnOrder: ['column-1']
};

export default initialData;