import { useEffect } from 'react'
import { withRouter } from 'react-router-dom'

function ScrollToTop({ history }) {
	useEffect(() => {
		const unlisten = history.listen(() => {
			window.scrollTo(0, 0)
		})
		return () => {
			unlisten()
		}
	}, [history])

	return null
}

export default withRouter(ScrollToTop)





  // let intViewportHeight = window.innerHeight;
  // console.log(intViewportHeight)
  const sticky = document.getElementById('sticky')

  // function isSticky(sticky) {
  //   if (sticky.intViewportHeight === 0)
  //   return sticky.style.position = 'sticky'
  // }
  
  window.scroll(function() {
    if (window.scrollTo() > 100) {
       sticky.style.position = 'sticky'
    }
    else {
      sticky.style.position = 'block'
    }}
    )