import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Item({ item }) {
  return (
    <Card key={item.id}>
      <Card.Img variant='top' src={item.images[0]} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Button variant='primary' as={Link} to={`/item/${item.id}`}>
          Ver Más
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
