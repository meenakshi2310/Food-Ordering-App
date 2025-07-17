import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    //we receive props inside the constructor
    super(props);

    this.state = {
      //stats is a big whole object which contains *all state variables*
      //   count: 0,
      //   count2: 2,
      userInfo: {
        name: "Dummy Name",
        location: "Default location",
        avatar_url: "Dummy photo",
        login: "Default user name",
      },
    };
  }
  async componentDidMount() {
    //Mounting:-Showing into the UI
    //make API calls here
    const data = await fetch("https://api.github.com/users/meenakshi2310");
    const json = await data.json();
    //console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {}
  componentWillUnmount() {} //this is called just before our function is unmounted:-When this component will disappear from our html(When we change our page)

  render() {
    // const { name, location } = this.props;
    // const { count } = this.state;
    const { name, location, avatar_url, login } = this.state.userInfo;
    return (
      <div className="user-card">
        {/* <h1>Count: {count}</h1> */}
        {/* <h1>Count 2: {count2}</h1> */}
        {/* <button
          className="count"
          onClick={() => {
            //this.state.count = this.state.count + 1; //never ever update state veriables directly
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Count Increase
        </button> */}
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {login}</h4>
      </div>
    );
  }
}

export default UserClass;
