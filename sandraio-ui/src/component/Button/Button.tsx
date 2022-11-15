import { Button } from "antd";
import React, { ButtonHTMLAttributes, ReactElement } from "react";


interface Props {
    className?: string;
    onClick?: () => void
}


const CustomButton = (props: Props): ReactElement => {

    return(<Button type="default" htmlType="submit" className={`${props.className} bg-logoDarkPurple w-36 h-8 p-2 m-7 text-center leading-4 text-gray-50 rounded-lg`} onClick={props.onClick}>Salvar</Button>)
}

export default CustomButton;