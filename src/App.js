
import React, { useState } from 'react'
import data from './data'
import question from './question';
import Single from './question'

function App() {

  const [userDetail, setUserDetail] = useState(data)


  return (
    <main>
      <div className="container">
        <h2>My Questions</h2>
        <section className='info'>
          {userDetail.map((detail) => {
            return <Single key={detail.id} {...detail}/>

          })}

        </section> 

      </div>


    </main>
  )
}

export default App;
