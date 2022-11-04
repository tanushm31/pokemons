import Head from 'next/head'
// import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center h-screen w-screen'>
        <div className="flex justify-center h-10 text-5xl">
          Pick the better Pokemon?  
        </div>
        <div className=" flex flex-col justify-center items-center border-solid  w-9/12 h-3/4" >
          <div className="flex  w-full h-100">
              <div  className='flex justify-center  w-1/2 pb-5'>
                Pokemon 1
              </div>
              <div className='flex justify-center  w-1/2 pb-5'>
                Pokemon 2
              </div>
          </div>
          <div className="flex flex-row justify-around w-full h-3/5">
              <div  className='flex justify-center items-center border-black border-2 border-solid  w-1/3 h-full'>
                Pokemon Pic 1
              </div>
              <div className='flex justify-center items-center border-black border-2 border-solid  w-1/3 h-full'>
                Pokemon Pic 2
              </div>
          </div>
          <div className="flex  w-full h-100 pt-5">
              <div  className='flex justify-center  w-1/2'>
                Pokemon 1
              </div>
              <div className='flex justify-center  w-1/2'>
                Pokemon 2
              </div>
          </div>
        </div>
        
    </div>
    
    
  )
}
