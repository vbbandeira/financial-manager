import React from 'react'
import "./Card.css";

interface Props {
    companyName: string;
    ticker: string;
    price: number;
}

const Card: React.FC<Props> = ({ companyName, ticker, price }: Props): React.JSX.Element => {
    return (
        <div className="card">
            <img src="https://ontarioscholarships.ca/scholarship-images/wage-detail-images/497/how-to-become-a-financial-manager.jpg" alt="Descriptive symbol of company" />
            <div className="details">
                <h2>{companyName} ({ticker})</h2>
                <p>{price}</p>
            </div>
            <p className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
    );
}

export default Card;