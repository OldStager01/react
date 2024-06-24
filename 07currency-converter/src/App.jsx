import { useState, useEffect, useCallback} from 'react'
import useCurrencyInfo from "./hooks/useCurrencyInfo"
import InputBox from './components/InputBox';
function App() {
  const [amount,setAmount]=useState(0);
  const [convertedAmount,setConvertedAmount]=useState(0);
  const [from,setFrom]=useState('usd');
  const [to,setTo]=useState('inr');
  const currencyInfo=useCurrencyInfo(from);
  const options=Object.keys(currencyInfo);

  const swap=()=>{
    const tempCurr=from;
    const tempAmt=amount;
    setFrom(to);
    setTo(tempCurr);
    setAmount(convertedAmount);
    setConvertedAmount(tempAmt);
  }

  const convert=()=>{
    setConvertedAmount(currencyInfo?(amount*currencyInfo[to]):0);
  }
  
  useEffect(()=>{convert()},[from,to,amount])
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2019_06/2746941/190208-stock-money-fanned-out-ew-317p.jpg')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                       convert();
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            selectedCurrency={from}
                            currencyList={options}
                            onAmountChange={(amount)=>{
                              setAmount(amount)
                            }}
                            onCurrencyChange={(currency)=>{
                              setFrom(currency)
                            }}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            selectedCurrency={to}
                            currencyList={options}
                            onAmountChange={(amount)=>{
                              setConvertedAmount(amount)
                            }}
                            onCurrencyChange={(currency)=>{
                              setTo(currency)
                            }}
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert 
                    </button>
                </form>
            </div>
        </div>
    </div>
);

}

export default App
