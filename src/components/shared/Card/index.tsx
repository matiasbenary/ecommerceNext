/* eslint-disable react/react-in-jsx-scope */
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
    <Link href='/product'>
      <div className="cursor-pointer border-2 border-yellow-200 rounded-md hover:bg-yellow-100 p-3">
      <div className="flex justify-center pt-3">
        <Image
          src="/caja.jpeg"
          className="inset-0 w-full h-full object-cover rounded-lg"
          alt="me" width="256" height="256"
        />
      </div>
        <div className="flex flex-col justify-center items-center mt-2">
          <h1 className="font-semibold mb-2.5 text-yellow-400 text-4xl">
            Desayuno artesanal
          </h1>
          <div className="leading-7 font-bold text-gray-400">
            $1600
          </div>
        </div>
        </div>
    </Link>
    </div>
  )
}

export default Card
