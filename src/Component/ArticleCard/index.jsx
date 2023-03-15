import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'


const ArticleCard = ({id,title,description,name,date,tags}) => {
    const parseDate = (str) => {
        let dt = new Date(str);
        return dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear();
    }
    return (
        <div className="article-card">
        <Link key={id} to={`/article/${id}`}>
        
            <span className="title">{title}</span>
            <span className="summary">{description}</span>
            <div className="">
              <span className="name flex-grow-1">by {name}</span>
              <span className="time flex-grow-1"> {parseDate(date)}</span>
            </div>
        </Link>
        </div>
    )
}

export default ArticleCard
