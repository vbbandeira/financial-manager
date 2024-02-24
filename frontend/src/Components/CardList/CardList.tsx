import React from 'react'
import Card from '../Card/Card'

interface Props { }

const CardList: React.FC<Props> = (props: Props): React.JSX.Element => {
    return (
        <div>
            <Card companyName="Apple" ticker="AAPL" price={120} />
            <Card companyName="Microsoft" ticker="MSFT" price={220} />
            <Card companyName="Tesla" ticker="TSLA" price={350} />
        </div>
    )
}

export default CardList