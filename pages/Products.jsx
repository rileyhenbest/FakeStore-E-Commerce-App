import { useEffect, useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import api from "../services/api";
import ProductCard from "../components/ProductCard";
import LoadingSpinner from "../components/LoadingSpinner";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const res = await api.get("/products");
      setProducts(res.data);
    } catch {
      setError("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingSpinner />;

  if (error)
    return <Alert className="m-4" variant="danger">{error}</Alert>;

  return (
    <Container className="mt-4">
      <h2>Products</h2>

      <Row xs={1} md={2} lg={3} className="g-4">
        {products.map((p) => (
          <Col key={p.id}>
            <ProductCard product={p} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;