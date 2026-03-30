import React,{Component} from "react";
export class NewsComponents extends Component{
    
    render(){
        let{title,description,imageurl,url,author,date,source}=this.props;//destructuring
        return(
            <div className="my-3">
              
                <div className="card" style={{width: "18rem"}}>
                    <img src={!imageurl?"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iWU3d.zVmASo/v0/1200x800.jpg":imageurl}alt="news thumbnail" className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">{title}<span className="badge text-bg-secondary">New</span><span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"style={{left:'90%',zIndex:1}}>
    {source}
    
  </span></h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown": author} on {new Date(date).toLocaleTimeString()}</small></p>
                        <a href={url}target="_blank" rel="noreferrer" className="btn btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}