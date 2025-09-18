import React from "react";

const NewsList = () => {
    return (
        <div className="w-full py-4 px-10 border mt-10 relative">
            <div className="pb-4">
                <h1 className="font-bold text-2xl pb-1">기사 제목입니다.</h1>
                <span className="text-sm text-gray-400">2025/09/18</span>
            </div>

            <p className="text-sm truncate">
                대충 ~~~ 기사 내용
            </p>
        </div>
    );
};

export default NewsList;
