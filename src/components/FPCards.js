import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'

function Cards(){


    return (
    
        <CardGroup  border="dark" style={{ width: '55rem', height: '5rem', offset:5, margin:50 }}>
        <Card style={{ width: "22rem", margin:50, Padding:30 }}>
          <Card.Img  variant="top" src="https://m.media-amazon.com/images/I/61D84NtVgVL.jpg" />
          <Card.Body>
            <Card.Title>iPohne 13Pro Max</Card.Title>
            <Card.Text>
              New Launch with all Updated Features.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "22rem", margin:50, Padding:30 }}>
          <Card.Img  variant="top" src="https://m.media-amazon.com/images/I/61D84NtVgVL.jpg" />
          <Card.Body>
            <Card.Title>iPohne 13Pro Max</Card.Title>
            <Card.Text>
              New Launch with all Updated Features.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "22rem", offset:5, margin:5 }}>
          <Card.Img  variant="top" src="https://m.media-amazon.com/images/I/61D84NtVgVL.jpg" />
          <Card.Body>
            <Card.Title>iPohne 13Pro Max</Card.Title>
            <Card.Text>
              New Launch with all Updated Features.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "22rem", offset:5, margin:5 }}>
          <Card.Img  variant="top" src="https://m.media-amazon.com/images/I/61D84NtVgVL.jpg" />
          <Card.Body>
            <Card.Title>iPohne 13Pro Max</Card.Title>
            <Card.Text>
              New Launch with all Updated Features.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>

      
          )
}

export default Cards;