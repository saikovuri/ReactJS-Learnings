var React = require('react');
var ReactDOM = require('react-dom');

//Create a component
var TodoComponent = React.createClass({
    getInitialState: function(){
        return {
    todos:['Sai Kumar','8609873485','saikovuri367@gmail.com'  ]
  }
  },

    render: function(){
        return(
          <div id="todo-list">
            <p>My information:</p>
            <ul>
            <li>{this.state.todos[0]}</li>
            <li>{this.state.todos[1]}</li>
            <li>{this.state.todos[2]}</li>
            </ul>

            </div>

        );
    }//render
});



//Put component in html

ReactDOM.render(<TodoComponent/>, document.getElementById('todo-wrapper'));
