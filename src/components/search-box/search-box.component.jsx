import * as React from 'react';

import './search-box.styles.css';

export const SearchBox = ({searchPlaceholder, onSearchValueChange}) => {
    return (
        <input
            type={'search'}
            placeholder={searchPlaceholder}
            className={'search'}
            onChange={onSearchValueChange}
        />
    )
}