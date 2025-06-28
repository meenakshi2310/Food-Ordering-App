import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <div>
        LoggedIn User :{" "}
        <UserContext.Consumer>
          {/* Using Context in Classbased component*/}
          {(data) => data.loggedInUser}
        </UserContext.Consumer>
      </div>
      {/* <User name={"Meenakshi (function)"} /> */}
      <UserClass name={"Meenakshi (class)"} location={"Noida"} />
    </div>
  );
};

export default About;
