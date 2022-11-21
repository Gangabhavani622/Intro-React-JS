const name = "Ganga";
const className = "greeting";
const user = { firstName: "Gangabhavani", lastName: "Kaligota" };
const fullName = (user) => user.firstName + " " + user.lastName;
const element = (
  <div>
    <h1 className={className}>Hello {fullName(user)}</h1>
    <p>Good To See You.</p>
  </div>
);
// const element = <h1 className="greeting">Hello World!</h1>;
ReactDOM.render(element, document.getElementById("root"));
