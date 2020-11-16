import React, {Component} from 'react'
import {
    Container,
    Row,
    Col,
    Media,
    ListGroup,
    Card
} from 'react-bootstrap'

export default class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"/>
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                    Не следует, однако забывать, что начало повседневной работы по формированию
                                    позиции позволяет оценить значение дальнейших направлений развития. Повседневная
                                    практика показывает, что начало повседневной работы по формированию позиции
                                    позволяет выполнять важные задания по разработке направлений прогрессивного
                                    развития.
                                </p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"/>
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                    Не следует, однако забывать, что начало повседневной работы по формированию
                                    позиции позволяет оценить значение дальнейших направлений развития. Повседневная
                                    практика показывает, что начало повседневной работы по формированию позиции
                                    позволяет выполнять важные задания по разработке направлений прогрессивного
                                    развития.
                                </p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"/>
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                    Не следует, однако забывать, что начало повседневной работы по формированию
                                    позиции позволяет оценить значение дальнейших направлений развития. Повседневная
                                    практика показывает, что начало повседневной работы по формированию позиции
                                    позволяет выполнять важные задания по разработке направлений прогрессивного
                                    развития.
                                </p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"/>
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                    Не следует, однако забывать, что начало повседневной работы по формированию
                                    позиции позволяет оценить значение дальнейших направлений развития. Повседневная
                                    практика показывает, что начало повседневной работы по формированию позиции
                                    позволяет выполнять важные задания по разработке направлений прогрессивного
                                    развития.
                                </p>
                            </Media.Body>
                        </Media>
                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-5">Category</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Html/Css</ListGroup.Item>
                                <ListGroup.Item>Javascript</ListGroup.Item>
                                <ListGroup.Item>Python</ListGroup.Item>
                                <ListGroup.Item>Java</ListGroup.Item>
                                <ListGroup.Item>C++</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className="mt-3" bg="light">
                            <Card.Body>
                                <Card.Title>Site widget</Card.Title>
                                <Card.Text>
                                    Не следует, однако забывать, что начало повседневной работы по формированию
                                    позиции позволяет оценить значение дальнейших направлений развития. Повседневная
                                    практика показывает, что начало повседневной работы по формированию позиции
                                    позволяет выполнять важные задания по разработке направлений прогрессивного
                                    развития.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
