"use client";

export default function Error(){

    // Next Js will provide us with an error prop
    return <main className="error">
        <h1>An error occured!</h1>
        <p>Failed to create meal.</p>
    </main>
}