import React, { ChangeEvent, useState, MouseEvent, SyntheticEvent } from 'react'

interface Props {
    onClick: (e: SyntheticEvent) => void;
    search: string | undefined;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search: React.FC<Props> = (props: Props): React.JSX.Element => {
    return (
        <div>
            <input value={props.search} onChange={(e) => props.handleChange(e)}></input>
            <button onClick={(e) => props.onClick(e)} />
        </div>
    );
}

export default Search