import React from 'react'

const Main = () => {
  return (
    <main>
        <h1 className='text-center my-3'>REACT</h1>
        <div className='contenedorPosts'>
            <div className='text-center border border-dark rounded post'>
                <h3>TITULO</h3>
                <p>Lorem ipsum dolor, sit amet consectetur.</p>
                <img src='https://picsum.photos/200/200?random=1' className='imgPost'></img>
            </div>
            <div className='text-center border border-dark rounded post'>
                <h3>TITULO</h3>
                <p>Lorem ipsum dolor, sit amet consectetur.</p>
                <img src='https://picsum.photos/200/200?random=2' className='imgPost'></img>
            </div>
            <div className='text-center border border-dark rounded post'>
                <h3>TITULO</h3>
                <p>Lorem ipsum dolor, sit amet consectetur.</p>
                <img src='https://picsum.photos/200/200?random=3' className='imgPost'></img>
            </div>
            <div className='text-center border border-dark rounded post'>
                <h3>TITULO</h3>
                <p>Lorem ipsum dolor, sit amet consectetur.</p>
                <img src='https://picsum.photos/200/200?random=4' className='imgPost'></img>
            </div>
        </div>
    </main>
  )
}

export default Main