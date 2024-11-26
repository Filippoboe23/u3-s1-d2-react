import { Card, Col, Row, Container } from "react-bootstrap";
import booksData from "../data/books/fantasy.json";

const AllTheBooks = () => {
  return (
    <Container className="my-4">
      <h2 className="text-center mb-4 text-info bg-dark rounded">Our Library</h2>
      <Row>
        {booksData.map((book) => (
          <Col key={book.asin} md={4} lg={3} className="mb-4">
            <Card className="bg-dark text-warning border-primary ">
              <Card.Img variant="top" src={book.img} alt={book.title} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>Categoria: {book.category}</Card.Text>
                <Card.Text>Prezzo: €{book.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
