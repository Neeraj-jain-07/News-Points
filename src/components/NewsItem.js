import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title,description,imgUrl,newUrl} = this.props;
        return (
            <div>
                <div className="card mb-4 mx-2 "  >
                        <img src={imgUrl ? imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPp-9KZeML5VPVE4nBItD4RIai1dzi36rVlw&usqp=CAU'} className="card-img-top" alt="..." style={{ height : '155px'}} />
                        <div className="card-body">
                           <strong> <h5 className="card-title">{title===null?null:(title.length >65? `${title.slice(0,65)}...`:title) } </h5> </strong>
                            <p className="card-text">{description ===null?null:(description.length>130? `${description.slice(0,130)}...`:description)   } </p>
                            <a href={newUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem;

