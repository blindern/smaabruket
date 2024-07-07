/// <reference lib="dom" />

import domready from 'domready'
import { createRoot } from 'react-dom/client'
import './app.scss'
import Calendar from './Calendar'
import Images from './Images'

import 'bootstrap/js/dist/modal'
import 'bootstrap/js/dist/scrollspy'

domready(() => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  createRoot(document.getElementById('smaabruket-images')!).render(<Images />)

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  createRoot(document.getElementById('smaabruket-calendar')!).render(
    <Calendar />,
  )
})
