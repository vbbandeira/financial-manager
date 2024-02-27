import React, { ChangeEvent, useState, MouseEvent, SyntheticEvent } from 'react';

interface Props {
    onSearchSubmit: (e: SyntheticEvent) => void;
    search: string | undefined;
    handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search: React.FC<Props> = ({ onSearchSubmit, search, handleSearchChange }: Props): React.JSX.Element => {
    return (
        <>
            <form onSubmit={onSearchSubmit}>
                <input value={search} onChange={handleSearchChange}></input>
            </form>
        </>
    );
}

export default Search;