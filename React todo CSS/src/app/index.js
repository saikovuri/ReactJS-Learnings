var React = require('react');
var ReactDOM = require('react-dom');

//module requires
require('./css/index.css');
var TodoItem = require('./todoItem');

//Create a component
var TodoComponent = React.createClass({
    getInitialState: function(){
        return {
    todos:['Playing badminton','Watching videos','Website Building', 'Thinking']
  }
  },

    render: function(){
      var todos = this.state.todos;

      todos = todos.map(function(item,index)
      {
        return(
          <TodoItem item ={item} key={index} onDelete={this.onDelete}/>
        );
      }.bind(this));

        return(
          <div id="todo-list">
            <p>My Hobbies:</p>
            <ul>
            {todos}
            </ul>

            </div>

        );
    },//render

onDelete:function(item){
var updatedTodos = this.state.todos.filter(function(val,index){
return item!==val;
});
this.setState({
todos:updatedTodos

});

}

});

//Put component in html

ReactDOM.render(<TodoComponent/>, document.getElementById('todo-wrapper'));
