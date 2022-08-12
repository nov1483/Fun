import React, { FC } from "react";
import { Figures } from "../models/figures/Figures";


interface LostFiguresProps {
    title : string;
    figures : Figures[]
}

const LostFigures: FC<LostFiguresProps> = ({title, figures}) => {
    return (
        <div className="lost">
            <h3>{title}</h3>
            {figures.map(figure => {
                return(
                <div key={figure.id}>
                    {figure.name} {figure.logo && <img width={20} height={20} src={figure.logo} alt='lost figure'/>}
                </div>
                )
            })}
        </div>
    )
}

export default LostFigures;