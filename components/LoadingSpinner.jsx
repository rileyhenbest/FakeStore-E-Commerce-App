import { Container, Spinner } from "react-bootstrap";

function LoadingSpinner() {
  return (
    <Container className="text-center mt-5">
      <Spinner animation="border" />
      <p className="mt-3">Loading...</p>
    </Container>
  );
}

export default LoadingSpinner;