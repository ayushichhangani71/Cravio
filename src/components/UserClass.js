import React from "react";
//class based component
class UserClass extends React.Component {
    // constructor() {
    constructor(props) {
        super(props);
        console.log(props);
        // this.state = {      //state variable
        this.state = {
            userInfo: {
            name: "dummy",
            location: "dummy",
            avatar_url: "htp://dummy-photo"
            },
        };
    }
    // used to api calls
    async componentDidMount() {
       // console.log("UserClass component mounted");
       const data = await fetch("https://api.github.com/users/ayushichhangani71");
         const json = await data.json();
         this.setState({
            userInfo: json,
            });

        console.log(json);
        this.timer = setInterval(() => {
            console.log("setInterval called");
        }, 1000);
    }
    componentDidUpdate() {
        // called after every update in the state (setState called)
        console.log("UserClass component updated");
    }
    componentWillUnmount() {
        // called before the component is removed from the DOM
        // user to clear timers, cancel network requests, etc.
        clearInterval(this.timer);
        console.log("UserClass component unmounted");
    }
    
    render() {
        const {name, location, avatar_url} = this.state.userInfo;

        return (
        <div className="p-5 border border-gray-300 rounded-md bg-gray-100 m-5 w-[600px]">
            <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @ayushi_chhangani</h4>
        </div>
        );   
    }
   
}
export default UserClass;