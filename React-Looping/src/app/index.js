var React = require('react');
var ReactDOM = require('react-dom');

//Create a component
var TodoComponent = React.createClass({
    getInitialState: function(){
        return {
    todos:['Wake up','Brush teeth','Eat Breakfast','Work', 'Sleep']
  }
  },

    render: function(){
      var todos = this.state.todos;

      todos = todos.map(function(item,index)
      {
        return(
          <li key ={index}>
          {item} </li>
        );
      });

        return(
          <div id="todo-list">
            <p>My Routine:</p>
            <ul>
            {todos}
            </ul>

            </div>

        );
    }//render
});

//Put component in html

ReactDOM.render(<TodoComponent/>, document.getElementById('todo-wrapper'));
