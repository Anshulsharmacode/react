import React from 'react'

const Card = ({ names , prices }) => {
  return (
    <div>
      <div className="flex font-sans">
        <div className="relative flex-none w-48">
        <img src="https://images.pexels.com/photos/28406651/pexels-photo-28406651/free-photo-of-historic-armenian-church-on-akdamar-island-van.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" className="object-cover absolute inset-0 w-full h-full" loading="lazy" />
        </div>
        <form className="flex-auto p-6">
        <div className="flex flex-wrap">
            <h1 className="flex-auto text-lg font-semibold text-green-600">
            {names}
            </h1>
            <div className="text-lg font-semibold text-slate-500">
            {prices}
            </div>
            <div className="flex-none mt-2 w-full text-sm font-medium text-black">
            In stock
            </div>
        </div>
        <div className="flex items-baseline pb-6 mt-4 mb-6 border-b border-gray-500">
            <div className="flex space-x-2 text-sm">
            <label>
                <input className="sr-only peer" name="size" type="radio" value="xs" checked />
                <div className="flex justify-center items-center w-9 h-9 text-black rounded-lg peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                XS
                </div>
            </label>
            <label>
                <input className="sr-only peer" name="size" type="radio" value="s" />
                <div className="flex justify-center items-center w-9 h-9 text-black rounded-lg peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                S
                </div>
            </label>
            <label>
                <input className="sr-only peer" name="size" type="radio" value="m" />
                <div className="flex justify-center items-center w-9 h-9 text-black rounded-lg peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                M
                </div>
            </label>
            <label>
                <input className="sr-only peer" name="size" type="radio" value="l" />
                <div className="flex justify-center items-center w-9 h-9 text-black rounded-lg peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                L
                </div>
            </label>
            <label>
                <input className="sr-only peer" name="size" type="radio" value="xl" />
                <div className="flex justify-center items-center w-9 h-9 text-black rounded-lg peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                XL
                </div>
            </label>
            </div>
        </div>
        <div className="flex mb-6 space-x-4 text-sm font-medium">
            <div className="flex flex-auto space-x-4">
            <button className="px-6 h-10 font-semibold text-white bg-black rounded-md" type="submit">
                Buy now
            </button>
            <button className="px-6 h-10 font-semibold rounded-md border border-gray-500 text-slate-900" type="button">
                Add to bag
            </button>
            </div>
            <button className="flex flex-none justify-center items-center w-9 h-9 text-black rounded-md border border-gray-500" type="button" aria-label="Like">
            <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
            </svg>
            </button>
        </div>
        <p className="text-sm text-black">
            Free shipping on all continental US orders.
        </p>
        </form>
        </div>
    </div>
  )
}

export default Card
