import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap/dist/js/bootstrap.min.js';
import { BsDialog } from './components/dialogs'


function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

    // enabletooltip
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

  }, [])


  return (
    <>
      <div className="container-fill">
        <div className="row">
          <div className="col-6">
            <div className="card">
              <BsDialog id="dialogA" > 
                <button className="btn">test</button>
                <p className="text-secondary">abc</p>
               </BsDialog>
              <p className="text-primary">primary text</p>
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#dialogA">
                Launch demo modal
              </button>

            </div>
          </div>
          <div className="col-6">
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
            <div className="card">
              <div className="text-secondary">some text</div>
              <p className="muted">Placeholder text to demonstrate some <a href="#" data-bs-toggle="tooltip" data-bs-title="Default tooltip">inline links</a> with tooltips. This is now just filler, no killer. Content placed here just to mimic the presence of <a href="#" data-bs-toggle="tooltip" data-bs-title="Another tooltip">real text</a>. And all that just to give you an idea of how tooltips would look when used in real-world situations. So hopefully you've now seen how <a href="#" data-bs-toggle="tooltip" data-bs-title="Another one here too">these tooltips on links</a> can work in practice, once you use them on <a href="#" data-bs-toggle="tooltip" data-bs-title="The last tip!">your own</a> site or project.</p>

            </div> </div>
        </div>
      </div>
    </>
  )
}

export default App
