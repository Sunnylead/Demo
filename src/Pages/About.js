import { Outlet, Link } from "react-router-dom";

const Contact = () => {
    return (
        <>


        <h1>About Me</h1>
        <h1><Link to="/contact">Back</Link></h1>
  
      <Outlet />
      </>
    );
  };
  
  export default Contact;
  