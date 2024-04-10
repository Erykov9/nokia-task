import NavigationComponent from "./components/NavigationComponent/NavigationComponent";
import MainPage from "./pages/MainPage/MainPage";
import { Container } from "react-bootstrap";

const Root = () => {
  return (
    <>
      <NavigationComponent/>
      <Container>
        <div>
          <MainPage />
        </div>
      </Container>
    </>
  );
};

export default Root;
