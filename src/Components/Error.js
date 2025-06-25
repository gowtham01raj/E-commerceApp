import React from 'react'
import {Link,useRouteError} from 'react-router';

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h2>Oops!Something went Wrong</h2>
      <h3>{err.data}</h3>
      <Link to="/">Back to Home</Link>
    </div>
  )
}

export default Error;