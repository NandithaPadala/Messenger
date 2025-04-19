import React from "react";
import Message from "./Message";

export default function Messages() {
    return (
        <>
            <div className="max-h-[80vh] flex flex-col overflow-y-auto scroll-smooth">
                <Message></Message>
                <Message></Message>
                <Message></Message>
                <Message></Message>
                <Message></Message>
                <Message></Message>
                <Message></Message>
                <Message></Message>
                <Message></Message>
                <Message></Message>
                <Message></Message>
                <Message></Message>
            </div>
        </>
    );
}