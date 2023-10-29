import "./NotFound.scss";
import Header from "../../components/Header/Header";

function NotFound() {
  return (
    <>
    <Header />
    <div className="error">
      <h1>Error - Page not Found</h1>
    </div>
    </>
  );
}

export default NotFound;
