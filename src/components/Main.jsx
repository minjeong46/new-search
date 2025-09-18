import React from "react";
import Search from "./Search";
import Period from "./Period";
import NewsList from "./NewsList";

const Main = () => {
    return (
        <main className="mx-auto w-[50%]">
            <section className="flex gap-2 justify-center">
                <Search />
                <Period />
            </section>
            <section className="w-full flex justify-center">
                <NewsList />
            </section>
        </main>
    );
};

export default Main;
