import React from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox.js';
import './App.css';
import Scroll from './Scroll.js';
class App extends React.Component {
    constructor(){
        super()
        this.state= {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(Response=>{
            return Response.json();
        })
        .then(users=>{
            this.setState({robots: users});
        })
        
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    render () {
        const filteredRobots=this.state.robots.filter(robots => {
            return (robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) ||
                    robots.username.toLowerCase().includes(this.state.searchfield.toLowerCase)
            )
        })
        return(
            <div className='tc'>
                <h1 className='f1'>RobotFriends</h1>
                <Searchbox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/> 
                </Scroll>   
            </div>
        )
        }
}

export default App;