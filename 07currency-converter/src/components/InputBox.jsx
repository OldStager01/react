import {useId} from "react";
function InputBox({
    label,
    amount,
    selectedCurrency='usd',
    currencyList=[],
    onAmountChange,
    onCurrencyChange,
    className = "",
}) {
    const amountID=useId();
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label htmlFor={amountID} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountID}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e)=>Number(onAmountChange(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectedCurrency} onChange={e=>onCurrencyChange(e.target.value)}
                >
                {currencyList.map(currency=>(
                         <option key={currency} value={currency}>
                            {currency}
                        </option>
                ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;