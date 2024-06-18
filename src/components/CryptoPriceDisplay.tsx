import { useMemo } from "react"
import { useCryptoStore } from "../store"
import Spinner from "./Spinner"

export default function CryptoPriceDisplay() {

    const result = useCryptoStore((state) => state.result)
    const loading = useCryptoStore((state) => state.loading)
    const hasResult = useMemo(() => !Object.values(result).includes('') , [result])
    return (
        <div className="result-wrapper">
            {loading ? <Spinner /> : hasResult && (
                <>
                    <h2>Price</h2>
                    <div className="result">
                        <img
                            src={`https://cryptocompare.com/${result.IMAGEURL}`}
                            alt="Cryptocurrency Image"
                        />
                        <div>
                            <p>The price is: <span>{result.PRICE}</span></p>
                            <p>Highest price of the day: <span>{result.HIGHDAY}</span></p>
                            <p>Lowest price of the day: <span>{result.LOWDAY}</span></p>
                            <p>Last 24h variation: <span>{result.CHANGEPCT24HOUR}</span></p>
                            <p>Last Update: <span>{result.LASTUPDATE}</span></p>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
