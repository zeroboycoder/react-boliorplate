import Nav from "../components/nav/nav";

const layout = (props) => {
  return (
    <>
      <Nav />
      {props.children}
    </>
  );
};

export default layout;
