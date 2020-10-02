// React
import React from 'react';

// Third-party
import {NavLink} from 'react-router-dom';

export function nameToLinkFormatter(name, row, page) {
    return (
        <NavLink to={`/${page}/${row.id}`}>{name}</NavLink>
    );
}

export function imgFormatter(img, row, placeholder) {
    return (
        <img src={img || placeholder}
             alt={row.nameRu}/>
    );
}
