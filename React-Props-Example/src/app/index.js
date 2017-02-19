var React = require('react');
var ReactDOM = require('react-dom');

//Creating component
var TodoComponent = React.createClass({
    render: function(){
        return(
          <div>
          <h1> I like badminton</h1>
            <p><strong>Brand: </strong> {this.props.racquet.brand}</p>
            <p><strong>Name: </strong>{this.props.racquet.name}</p>
            <p><strong>Price: </strong>{this.props.racquet.price}</p>
            </div>

        );
    }
});

var myRacquet ={brand: "Yonex", name:"Nanoray 20", price: "65$"};

//Put component in html

ReactDOM.render(<TodoComponent msg="I like badminton!" racquet = {myRacquet} />, document.getElementById('todo-wrapper'));
