import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/meters/create">Create</Link>
        </li>
      </ul>
    </nav>
    <hr />
  </div>
)
