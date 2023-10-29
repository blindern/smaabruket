import domready from 'domready'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './app.scss'
import Calendar from './Calendar'
import Images from './Images'

import 'bootstrap/js/dist/modal'
import 'bootstrap/js/dist/scrollspy'

domready(() => {
  createRoot(document.getElementById('smaabruket-images')!).render(<Images />)

  createRoot(document.getElementById('smaabruket-calendar')!).render(
    <Calendar />,
  )
})
