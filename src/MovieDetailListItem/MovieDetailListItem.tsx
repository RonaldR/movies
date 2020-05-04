import React from 'react';

import './MovieDetailListItem.scss';

type Props = {
    label: string,
    item: string,
    link?: string
}

const MovieDetailListItem = ({ label, item, link }: Props) => (
    <li className="list-item">
        <span className="list-item__label">{label}</span>
        <span className="list-item__item">
            {link
                ? <a href={link} target="_blank" rel="noopener noreferrer">{item}</a>
                : item}
        </span>
    </li>
);

export default MovieDetailListItem;