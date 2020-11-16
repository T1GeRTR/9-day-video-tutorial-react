import React, {Component} from 'react'
import Carousel from "../Components/CarouselBox"
import {Container, CardDeck, Card, Button} from "react-bootstrap"

export default class Home extends Component {
    render() {
        return (
            <div>
                <Carousel/>
                <Container>
                    <h2 className="text-center m-4">Our team</h2>
                    <CardDeck className="m-4">
                        <Card bg="light">
                            <Card.Img
                                height={200}
                                variant="top"
                                src="https://www.automiq.ru/wp-content/uploads/TeamLab_2017_2.jpg"/>
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Не следует, однако забывать, что начало повседневной работы по формированию
                                    позиции позволяет оценить значение дальнейших направлений развития. Повседневная
                                    практика показывает, что начало повседневной работы по формированию позиции
                                    позволяет выполнять важные задания по разработке направлений прогрессивного
                                    развития.
                                </Card.Text>
                                <Button variant="primary">About Team</Button>
                            </Card.Body>
                        </Card>
                        <Card bg="light">
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Не следует, однако забывать, что начало повседневной работы по формированию
                                    позиции позволяет оценить значение дальнейших направлений развития. Повседневная
                                    практика показывает, что начало повседневной работы по формированию позиции
                                    позволяет выполнять важные задания по разработке направлений прогрессивного
                                    развития.
                                </Card.Text>
                                <Button variant="primary">About Team</Button>
                            </Card.Body>
                            <Card.Img
                                height={200}
                                variant="bottom"
                                src="https://uploads.hb.cldmail.ru/geekbrains/public/ckeditor_assets/pictures/7153/retina-fb75d0dc0b6389dd32ec6f4ef0896ee5.jpg"/>
                        </Card>
                        <Card bg="light">
                            <Card.Img
                                height={200}
                                variant="top"
                                src="https://blog.agilix.ru/wp-content/uploads/2018/12/mob-programming-1024x682.jpg"/>
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Не следует, однако забывать, что начало повседневной работы по формированию
                                    позиции позволяет оценить значение дальнейших направлений развития. Повседневная
                                    практика показывает, что начало повседневной работы по формированию позиции
                                    позволяет выполнять важные задания по разработке направлений прогрессивного
                                    развития.
                                </Card.Text>
                                <Button variant="primary">About Team</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </div>
        )
    }
}
