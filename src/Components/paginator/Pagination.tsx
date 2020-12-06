import React, {useState} from "react";
import style from './Pagination.module.css'
import {Button} from "@material-ui/core";

type PaginatorPropsType = {
    postsPerPage: number
    totalPosts: number
    paginate: (pageNumber: number) => void
}

export const Paginator = (props: PaginatorPropsType) => {
    const [portionNumber, setPortionNumber] = useState(1)
    const portionCount = props.totalPosts / props.postsPerPage
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
        pageNumbers.push(i)
    }
    let leftPortionPageNumber = (portionNumber - 1) * props.postsPerPage + 1
    let rightPortionPageNumber = portionNumber * props.postsPerPage
    return (
        <nav>
            <ul className='pagination'>
                {portionNumber > 1 && <Button color="primary" onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>Prev</Button>}
                {pageNumbers.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(number => (
                        <span key={number} className="page-item">
            <a onClick={() => props.paginate(number)} className={style.page}>
                {number}
            </a>
        </span>
                    ))}
                {(portionCount > portionNumber && portionCount > 10) &&
                <Button color="primary" onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>Next</Button>
                }

            </ul>
        </nav>
    )
}