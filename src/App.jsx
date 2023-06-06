import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LetterKey from './LetterKey'

function App() {

  return (
    <>
      <h1>Wordle with React</h1>
      <div className='container'>
        <table>
          <tbody>
            <tr>
              <td>
                <LetterKey>q</LetterKey>
              </td>
              <td>
                <LetterKey>w</LetterKey>
              </td>
              <td>
                <LetterKey>e</LetterKey>
              </td>
              <td>
                <LetterKey>r</LetterKey>
              </td>
              <td>
                <LetterKey>t</LetterKey>
              </td>
              <td>
                <LetterKey>y</LetterKey>
              </td>
              <td>
                <LetterKey>u</LetterKey>
              </td>
              <td>
                <LetterKey>i</LetterKey>
              </td>
              <td>
                <LetterKey>o</LetterKey>
              </td>
              <td>
                <LetterKey>p</LetterKey>
              </td>
            </tr>

            <tr>
              <td>
                <LetterKey>q</LetterKey>
              </td>
              <td>
                <LetterKey>w</LetterKey>
              </td>
              <td>
                <LetterKey>e</LetterKey>
              </td>
              <td>
                <LetterKey>r</LetterKey>
              </td>
              <td>
                <LetterKey>t</LetterKey>
              </td>
              <td>
                <LetterKey>y</LetterKey>
              </td>
              <td>
                <LetterKey>u</LetterKey>
              </td>
              <td>
                <LetterKey>i</LetterKey>
              </td>
              <td>
                <LetterKey>o</LetterKey>
              </td>
              <td>
                <LetterKey>p</LetterKey>
              </td>
            </tr>

            <tr>
              <td>
                <LetterKey>q</LetterKey>
              </td>
              <td>
                <LetterKey>w</LetterKey>
              </td>
              <td>
                <LetterKey>e</LetterKey>
              </td>
              <td>
                <LetterKey>r</LetterKey>
              </td>
              <td>
                <LetterKey>t</LetterKey>
              </td>
              <td>
                <LetterKey>y</LetterKey>
              </td>
              <td>
                <LetterKey>u</LetterKey>
              </td>
              <td>
                <LetterKey>i</LetterKey>
              </td>
              <td>
                <LetterKey>o</LetterKey>
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>

    </>
  )
}

export default App
