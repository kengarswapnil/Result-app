import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>

      <div className=" customSize p-2 m-3 mx-auto rounded">
        <h1>Check Your Result</h1>
        <h6>Enter Your Roll Number to View Your Result</h6>
        <div className="border customSize  mx-auto rounded mt-3">
          <label htmlFor="Result"> <b>Enter RollNumber :</b></label>
          <input class="form-control me-2 w-75 mt-4" type="Result" placeholder="Roll no" aria-label="Search" />
          <Link className='btn btn-primary mt-3 w-75' to='/result/rollno'>Check Result</Link>
        </div>
      </div>
    </div>

  )
}

export default Home
