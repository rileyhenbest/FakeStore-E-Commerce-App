import { useState } from "react";
import { Container, Form, Button, Alert, Card } from "react-bootstrap";
import api from "../services/api";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSuccess("");
      setError("");

      const newProduct = {
        title,
        price,
        description,
        category,
        image: "https://i.pravatar.cc",
      };

      await api.post("/products", newProduct);

      setSuccess("Product created successfully (mock API)");

      setTitle("");
      setPrice("");
      setDescription("");
      setCategory("");

    } catch (err) {
      setError("Failed to create product.");
    }
  };

  return (
    <Container className="mt-4">

      <Card className="p-4 shadow">

        <h2 className="mb-3">Add New Product</h2>

        {success && <Alert variant="success">{success}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>

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

          <Button type="submit" variant="primary">
            Create Product
          </Button>

        </Form>

      </Card>

    </Container>
  );
}

export default AddProduct;