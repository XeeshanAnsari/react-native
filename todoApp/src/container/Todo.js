import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoMiddleware from '../store/middlewares/todo_middlewares';
import {
    Text,
    View,
    TextInput,
    Button,
    ScrollView,
    TouchableHighlight,
    Modal
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

mapStateToProps = (state) => {
    return {
        todos: state.Todos.todos
    }
}
mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todo) => { dispatch(TodoMiddleware.addTodo(todo)) },
        getAllTodos: () => { dispatch(TodoMiddleware.getAllTodos()) },
        completedTodo: (id, todoStatus) => { dispatch(TodoMiddleware.completedTodo(id, todoStatus)) },
        deleteTodo: (id) => { dispatch(TodoMiddleware.deleteTodo(id)) },
        editTodo: (id, updateTodo) => { dispatch(TodoMiddleware.editTodo(id, updateTodo)) }

    }
}

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            todos: [],
            modalVisible: false,
            editTodo: '',
            editTodo_id: ''
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps) {
            console.log("NextProps", nextProps.todos);
            this.setState({ todos: nextProps.todos })
        }
    }

    componentWillMount() {
        this.props.getAllTodos();
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }



    addTodo = () => {
        this.props.addTodo(this.state.text);
        this.setState({
            text: ''
        })
    }
    completedTodo = (id, status) => {
        console.log("id", id)
        const todoStatus = !status;
        console.log(todoStatus)
        this.props.completedTodo(id, todoStatus);
    }

    deleteTodo = (id) => {
        console.log("Delete Id", id)
        this.props.deleteTodo(id)
    }
    EditTodo = (todo) => {
        if (todo.completed === true) {
            alert("Todo Cann't Edit Because it Completed ");
        }
        else {
            this.setState({
                editTodo: todo.todo,
                editTodo_id: todo._id
            })
            this.setModalVisible(!this.state.modalVisible)
        }

    }
    handleEditTodo = () => {
        console.log("edit todo", this.state.editTodo);
        this.props.editTodo(this.state.editTodo_id, this.state.editTodo)
        this.setModalVisible(!this.state.modalVisible)
    }
    render() {
        const {
             containerStyle,
            headerStyle,
            headerText,
            inputContainer,
            textInputStyle,
            todoMainContainer,
            todoContainer,
            todoRightContainer } = styles;
        return (
            <View style={containerStyle}>
                <View style={headerStyle}>
                    <Text style={headerText}>TODO APP</Text>
                </View>
                <View style={inputContainer}>
                    <TextInput
                        style={textInputStyle}
                        onChangeText={(text) => this.setState({ text: text })}
                        value={this.state.text}
                    />
                    <Button
                        onPress={this.addTodo}
                        title="Add Todo"
                    />
                </View>
                <ScrollView style={todoMainContainer}>
                    {this.state.todos.map((todo, i) => {
                        return (
                            <View key={todo._id} style={todoContainer} onPress={() => this.completedTodo(todo._id)}>
                                <Text onPress={() => this.completedTodo(todo._id, todo.completed)} style={{ textDecorationLine: (todo.completed === true) ? 'line-through' : 'none' }}>{i + 1} - {todo.todo}</Text>
                                <View style={todoRightContainer}>
                                    <TouchableHighlight underlayColor="#00000000" style={{ paddingRight: 8 }} onPress={() => this.EditTodo(todo)}><Text>Edit</Text></TouchableHighlight>
                                    <TouchableHighlight underlayColor="#00000000" onPress={() => this.deleteTodo(todo._id)}><Text>Delete</Text></TouchableHighlight>
                                </View>
                            </View>
                        )
                    })}

                </ScrollView>

                <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { alert("Modal has been closed.") }}
                >

                    <View>
                        <View style={inputContainer}>
                            <TextInput
                                style={textInputStyle}
                                onChangeText={(text) => this.setState({ editTodo: text })}
                                value={this.state.editTodo}
                            />
                            <Button
                                onPress={() => this.handleEditTodo()}
                                title="Update Todo"
                            />

                        </View>
                        <Button
                            onPress={() => this.setModalVisible(!this.state.modalVisible)}
                            title="Close"
                        />
                    </View>

                </Modal>

            </View>
        )
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'column'
    },
    headerStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        paddingBottom: 15,
        shadowColor: '#00edd0',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'

    },
    headerText: {
        fontSize: 30
    },
    inputContainer: {
        flexDirection: 'row',
        padding: 15,
    },
    textInputStyle: {
        height: 40,
        width: 290
    },
    todoMainContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 20
    },
    todoContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#f8f8f8',
        height: 50,
        borderColor: '#e8eaf6',
        borderBottomWidth: 1,
        alignItems: 'center'
    },
    todoRightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
