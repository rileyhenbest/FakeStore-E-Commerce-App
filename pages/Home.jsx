import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container className="mt-5">
      <Card className="text-center shadow p-4">

        <Card.Body>

          <h1>Welcome to FakeStore</h1>

          <p className="mt-3">
            Browse products, view details, create new items,
            edit existing products, and delete products using
            the FakeStore API.
          </p>

          <Button
            as={Link}
            to="/products"
            variant="primary"
          >
            View Products
          </Button>

        </Card.Body>

      </Card>
    </Container>
  );
}

export default Home;