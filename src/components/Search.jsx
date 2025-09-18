import React from "react";

const Search = () => {
    return (
        <div className="basis-1/2">
            <div className="relative float-left">
                <input
                    type="text"
                    className="border rounded-md py-1 px-2 pr-8"
                />
                <button
                    type="button"
                    className="absolute inset-y-0 right-2"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                        width="1.2rem"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Search;
