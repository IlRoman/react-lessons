import React from 'react';
import CreateTaskInput from './CreateTaskInput';
import Task from './Task';
import { createTask, fetchTasksList, updateTask, deleteTask } from './TasksListGateways';

class TasksList extends React.Component {
    state = {
        tasks: []
    }

    componentDidMount() {
        this.fetchTasks();
    }

    fetchTasks = () => {
        fetchTasksList().then(taskList =>
            this.setState({
                tasks: taskList,
            }))
    }

    onCreate = text => {
        const newTask = {
            text,
            done: false,
        }

        createTask(newTask).then(() => this.fetchTasks());
    }

    handleTasktatusChange = id => {
        const { done, text } = this.state.tasks.find(task => task.id === id);
        const updatedTask = {
            text,
            done: !done,
        }
        updateTask(id, updatedTask)
            .then(() => this.fetchTasks());
    }

    handleTaskDelete = id => {
        deleteTask(id)
            .then(() => this.fetchTasks());
    }

    render() {
        const sortedList = this.state.tasks
            .slice()
            .sort((a, b) => a.done - b.done);

        return (
            <div className="todo-list">
                <CreateTaskInput onCreateTask={this.onCreate} />
                <ul className="list">
                    {sortedList.map(task =>
                        <Task
                            key={task.id}
                            {...task}
                            onDelete={this.handleTaskDelete}
                            onChange={this.handleTasktatusChange}
                        />
                    )}
                </ul>
            </div>
        )
    }
}

export default TasksList;