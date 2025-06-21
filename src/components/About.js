import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      {/* <User name={"Meenakshi (function)"} /> */}
      <UserClass name={"Meenakshi (class)"} location={"Noida"} />
    </div>
  );
};

export default About;
