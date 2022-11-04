import React from "react";

interface BaseContainerProps {
    className?: string;
    children: React.ReactNode;
}

const BaseContainer = (props: BaseContainerProps) => {
    return <div className={props.className}>{props.children}</div>
}

export default BaseContainer