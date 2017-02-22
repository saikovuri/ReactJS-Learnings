var React = require('react');
var ReactDOM = require('react-dom');

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

//Creating TodoItem
var TodoItem = React.createClass({
    render: function(){
        return(
            <li>
                <div className="todo-item">
                    <span className="item-name">{this.props.item}</span>
                    <span className="item-remove" onClick={this.handleDelete}> X </span>
                </div>
            </li>
        );
    },

    //Custom functions
    handleDelete: function(){
        this.props.onDelete(this.props.item);
    }
});
//Put component in html

ReactDOM.render(<TodoComponent/>, document.getElementById('todo-wrapper'));
