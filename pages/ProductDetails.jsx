import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
import api from "../services/api";
import LoadingSpinner from "../components/LoadingSpinner";
import DeleteModal from "../components/DeleteModal";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    api.get(`/products/${id}`).then((res) => {
      setProduct(res.data);
      setLoading(false);
    });
  }, [id]);

  const handleDelete = async () => {
    await api.delete(`/products/${id}`);
    navigate("/products");
  };

  if (loading) return <LoadingSpinner />;

  return (
    <Container className="mt-4">
      <Card className="p-3 shadow">
        <Card.Img
          src={product.image}
          style={{ height: "300px", objectFit: "contain" }}
        />

        <Card.Body>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <h4>${product.price}</h4>

          <div className="d-flex gap-2">
            <Button
              as={Link}
              to={`/edit-product/${id}`}
              variant="warning"
            >
              Edit
            </Button>

            <Button variant="danger" onClick={() => setShow(true)}>
              Delete
            </Button>

            <Button as={Link} to="/products" variant="secondary">
              Back
            </Button>
          </div>
        </Card.Body>
      </Card>

      <DeleteModal
        show={show}
        handleClose={() => setShow(false)}
        handleDelete={handleDelete}
      />
    </Container>
  );
}

export default ProductDetails;