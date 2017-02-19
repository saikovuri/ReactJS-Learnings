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
          <TodoItem item ={item} key={index}/>
        );
      });

        return(
          <div id="todo-list">
            <p>My Hobbies:</p>
            <ul>
            {todos}
            </ul>

            </div>

        );
    }//render
});

//Creating TodoItem
var TodoItem = React.createClass({
render:function(){
  return(
    <li>
      <div className="todo-item">
      <span className="itemName">{this.props.item}  </span>

      </div>
    </li>
  );
}

});

//Put component in html

ReactDOM.render(<TodoComponent/>, document.getElementById('todo-wrapper'));
