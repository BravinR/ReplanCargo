"use client";
import React, { useState } from "react";
import Footer from "./../../components/footer";
import NavBar from "./../../components/navBar";

const Quote = (): JSX.Element => {
    const [length, setLength] = useState<string>("");
    const [width, setWidth] = useState<string>("");
    const [height, setHeight] = useState<string>("");
    const [unit, setUnit] = useState<string>("feet");
    const [quote, setQuote] = useState<number>(0);

    const calculateQuote = (): void => {
        // Conversion factor from cubic feet to cubic meters
        const conversionFactor: number = unit === "feet" ? 1 : 35.3147;
        const volume: number =
            (Number(length) * Number(width) * Number(height)) /
            conversionFactor;
        const totalCost: number = volume * (unit === "feet" ? 25 : 800);
        setQuote(parseFloat(totalCost.toFixed(2)));
    };

    return (
        <div>
            <NavBar />
            <div className="mx-8 md:mx-60">
                <div>
                    <h2 className="text-3xl text-center mt-8 mb-4 font-semibold">
                        Cost Calculation
                    </h2>
                    <p className="text-lg text-center md:mx-24">
                        The shipping cost is calculated based on the volume of
                        the package and the selected unit of measurement. For
                        cubic feet, the rate is $25 per unit volume, while for
                        cubic meters, the rate is $800 per unit volume.
                    </p>
                </div>
                <h1 className="text-3xl text-center font-bold mt-8">
                    Get A Quote
                </h1>
                <div className="mr-14 ml-4 lg:mr-44 lg:ml-64">
                    <div className="flex flex-col space-y-2 mb-2">
                        <label htmlFor="unit">Unit:</label>
                        <select
                            id="unit"
                            value={unit}
                            onChange={(e) => setUnit(e.target.value)}
                            className="border border-gray-300 rounded-md p-2 focus:outline-none"
                        >
                            <option value="feet">Feet</option>
                            <option value="meters">Meters</option>
                        </select>
                    </div>
                    <div className="flex flex-col space-y-2 mb-2">
                        <label htmlFor="length">Length ({unit}):</label>
                        <input
                            id="length"
                            type="number"
                            value={length}
                            onChange={(e) => setLength(e.target.value)}
                            className="border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="flex flex-col space-y-2 mb-2">
                        <label htmlFor="width">Width ({unit}):</label>
                        <input
                            id="width"
                            type="number"
                            value={width}
                            onChange={(e) => setWidth(e.target.value)}
                            className="border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="flex flex-col space-y-2 mb-2">
                        <label htmlFor="height">Height ({unit}):</label>
                        <input
                            id="height"
                            type="number"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            className="border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <button
                        onClick={calculateQuote}
                        className="bg-blue-900 text-white py-2 px-4 rounded-md mt-4 mb-16"
                    >
                        Calculate Quote
                    </button>
                    {quote > 0 && (
                        <div className="mb-4">
                            <p className="text-lg">
                                Shipping Cost: <strong>${quote}</strong>
                            </p>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Quote;
