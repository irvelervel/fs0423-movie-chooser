import { Component } from 'react'
import { Card } from 'react-bootstrap'

class MovieCard extends Component {
  // questo componente deve recuperare dinamicamente le informazioni per la Card da omdbapi.com
  // il metodo di lifecycle ideale per effettuare una fetch al montaggio del componente è "componentDidMount"
  // componentDidMount viene eseguito UNA VOLTA SOLA, finito il primo render(), e al termine della fetch lo
  // useremo anche per salvare i risultati di ricerca nello state di MovieCard (setState).
  // poichè componentDidMount viene eseguito una volta sola, non avremo problemi di troppe fetch, troppi setState etc.

  componentDidMount() {
    // invocheremo la funzione che farà la fetch
  }

  render() {
    return (
      <>
        <h2>Locandina</h2>
        <Card>
          <Card.Img variant="top" src="https://placekitten.com/400" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default MovieCard
