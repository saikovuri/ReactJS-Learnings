var React = require('react');
var ReactDOM = require('react-dom');

import {Router, Route,browserHistory,Link} from 'react-router';

//module requires
require('./css/index.css');
var TodoItem = require('./todoItem');
var AddItem = require('./addItem');
var About = require('./about');
var App = React.createClass({
render:function(){
return(
<Router history = {browserHistory}>
<Route path ={'/'} component={TodoComponent}> </Route>
<Route path= {'/about'} component={About}> </Route>
</Router>
);
}
});


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
          <Link to={'/about'}>About</Link>
            <p>My Hobbies:</p>
            <ul>
            {todos}
            <AddItem onAdd={this.onAdd}/>
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

},

onAdd:function(item){
var updatedTodos = this.state.todos;
updatedTodos.push(item);
this.setState({
todos:updatedTodos

})
}

});

//Put component in html

ReactDOM.render(<App/>, document.getElementById('todo-wrapper'));
