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
                <LetterKey>a</LetterKey>
              </td>
              <td>
                <LetterKey>s</LetterKey>
              </td>
              <td>
                <LetterKey>d</LetterKey>
              </td>
              <td>
                <LetterKey>f</LetterKey>
              </td>
              <td>
                <LetterKey>g</LetterKey>
              </td>
              <td>
                <LetterKey>h</LetterKey>
              </td>
              <td>
                <LetterKey>j</LetterKey>
              </td>
              <td>
                <LetterKey>k</LetterKey>
              </td>
              <td>
                <LetterKey>l</LetterKey>
              </td>
              <td>
                <LetterKey>ñ</LetterKey>
              </td>
            </tr>

            <tr>
              <td>
                <LetterKey>enviar</LetterKey>
              </td>
              <td>
                <LetterKey>z</LetterKey>
              </td>
              <td>
                <LetterKey>x</LetterKey>
              </td>
              <td>
                <LetterKey>c</LetterKey>
              </td>
              <td>
                <LetterKey>v</LetterKey>
              </td>
              <td>
                <LetterKey>b</LetterKey>
              </td>
              <td>
                <LetterKey>n</LetterKey>
              </td>
              <td>
                <LetterKey>m</LetterKey>
              </td>
              <td>
                <LetterKey>  </LetterKey>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

    </>
  )
}

export default App
