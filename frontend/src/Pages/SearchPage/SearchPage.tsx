import React from 'react';
import { SyntheticEvent, useState } from 'react';
import { CompanySearch } from '../../company';
import Search from '../../Components/Search/Search';
import ListPortfolio from '../../Components/Portfolio/ListPortfolio/ListPortfolio';
import CardList from '../../Components/CardList/CardList';
import { searchCompanies } from '../../api';

interface Props { }

const SearchPage = (props: Props) => {
    const [search, setSearch] = useState<string>("");
    const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
    const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
    const [serverError, setServerError] = useState<string>("");

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const onPortfolioCreate = (e: any) => {
        e.preventDefault();
        if (portfolioValues.find((value) => value === e.target[0].value)) return;
        const updatedPortfolio = [...portfolioValues, e.target[0].value];
        setPortfolioValues(updatedPortfolio);
    };

    const onPortfolioDelete = (e: any) => {
        e.preventDefault();
        const removed = portfolioValues.filter((value) => {
            return value !== e.target[0].value;
        });
        setPortfolioValues(removed);
    };

    const onSearchSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const result = await searchCompanies(search);
        if (typeof result === "string") {
            setServerError(result);
        } else if (Array.isArray(result.data)) {
            setSearchResult(result.data);
        }
    };

    return (<>
        <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange} />
        <ListPortfolio portfolioValues={portfolioValues} onPortfolioDelete={onPortfolioDelete} />
        <CardList searchResults={searchResult} onPortfolioCreate={onPortfolioCreate} />
        {serverError && <div>Unable to connect to API</div>}
    </>
    );
};

export default SearchPage;