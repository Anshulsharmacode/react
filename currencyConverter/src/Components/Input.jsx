// import React from 'react'

// function Input({
//     label ,
//     amount,
//     onAmountchange,
//     onCurrencychange,
//     currencyOption =[],
//     selectCurrrency='usd',
//     ammountDisable=false,
//     currencyDisable=false,
//     className = "",
// }) {

//   return (
//     <div className={'bg-white p-3 rounded-xl text-sm flex ${className}'}>
//         <div className='w-1/2'>
//          <label className='text-black/40 mb-2 inline-block'>{label}
//          </label>
//         <input
//          type="number"
//          className='outline-none w-full text-black bg-transparent py-1.5'
//          placeholder='Ammount'
//          disabled={ammountDisable}
//          value={amount}
//          onChange={(e) => onAmountchange && onAmountchange(Number(e.target.value))}
//            />
//         </div>
//         <div className='w-1/2 flex flex-wrap justify-end text-right'>
//             <p className='text-black mb-2 w-full'>Currency Type</p>
//             <select className='rounded-lg px-1 py-1 bg-gray-100 text-black cursor-pointer outline-none'
//              value={selectCurrrency}
//              onChange={(e)=> onCurrencychange && onCurrencychange(e.target.value)}
//              disabled={currencyDisable}>
               
//                 {
//                     currencyOption.map((Currency)=>( <option key={Currency} value={Currency}>usd</option>
//                     ))
//                 }
//             </select>

//         </div>
      
//     </div>
//   )
// }

// export default Input
import React from 'react'
function Input({
    label,
    
    className = "",
}) {
   

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block">
                    label
                </label>
                <input
                    
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    
                >
                    
                        <option value="usd">
                            usd
                        </option>
                
                </select>
            </div>
        </div>
    );
}

export default Input;