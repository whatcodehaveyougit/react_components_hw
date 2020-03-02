import React, { Fragment } from 'react'
import Film from './Film.js'

function FilmList({ films }){

    const filmComponents = films.map(film => {
        return (
            <Film title = { film.name } url={film.url } ></Film>
        )
    })

    return (
        <Fragment>
            <h4>Test</h4>
            <ul>
                { filmComponents }
            </ul>
        </Fragment>
    )

}

export default FilmList