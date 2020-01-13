// url: http://www.adorocinema.com/filmes/numero-cinemas/
// Copy this code below and run in navigator console

const moviesElements = document.querySelectorAll('.mdl')

let movies = []

function getData(element, query, key = 'innerText') {
  const children = element.querySelector(query)
  if (!children) return ''
  return children[key]
}

moviesElements.forEach((el, i) => {
  const movie = {
    id: i + 1,
    title: getData(el, '.meta-title-link'),
    description: getData(el, '.content-txt'),
    thumbnail: getData(el, '.thumbnail-img', 'src'),
    year: Number(getData(el, '.date').replace(/.*(\d{4})$/, '$1')),
    category: getData(el, '.meta-body .xXx'),
    streamingUrl: '',
    rating: Number(getData(el, '.stareval-note').replace(',', '.')),
    duration: getData(el, '.meta-body-info').replace(/.*\/(.*)\/.*/, '$1').replace(/\s/g, ''),
    actors: getData(el, '.meta-body-actor').replace(/.*\:\s/, '')
  }
  movies.push(movie)
})

copy(movies) // this line copy de movies content to clipboard area

