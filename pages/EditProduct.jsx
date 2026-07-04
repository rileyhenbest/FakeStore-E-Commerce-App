import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Form, Button, Alert, Card } from "react-bootstrap";
import api from "../services/api";
import LoadingSpinner from "../components/LoadingSpinner";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      setLoading(true);

      const res = await api.get(`/products/${id}`);
      const product = res.data;

      setTitle(product.title);
      setPrice(product.price);
      setDescription(product.description);
      setCategory(product.category);

    } catch (err) {
      setError("Failed to load product.");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);
      setError("");
      setSuccess("");

      const updatedProduct = {
        title,
        price,
        description,
        category,
      };

      await api.put(`/products/${id}`, updatedProduct);

      setSuccess("Product updated successfully (mock API)");

      setTimeout(() => {
        navigate(`/products/${id}`);
      }, 1200);

    } catch (err) {
      setError("Failed to update product.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <Container className="mt-4">

      <Card className="p-4 shadow">

        <h2 className="mb-3">Edit Product</h2>

        {success && <Alert variant="success">{success}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleUpdate}>

          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Control
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </Form.Group>

          <Button type="submit" variant="warning" disabled={saving}>
            {saving ? "Updating..." : "Update Product"}
          </Button>

        </Form>

      </Card>

    </Container>
  );
}

export default EditProduct;