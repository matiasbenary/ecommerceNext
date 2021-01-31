import React from 'react'

const index = ({ count, setCount }:{count: number, setCount:(number:number)=>null}) => {
  return (
        <div className="flex items-center my-3">
               <button onClick={() => setCount(count - 1)} className="flex items-center justify-center px-2 py-1 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 mr-2"> - </button>
                    {count}
                <button onClick={() => setCount(count + 1)} className="flex items-center justify-center px-2 py-1 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 ml-2"> + </button>
        </div>
  )
}

export default index
