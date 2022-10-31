import React,{useState} from "react";
import LinkService from "../services/LinkService";

class HomePage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            links:[]
        }
    }

    componentDidMount(){
        LinkService.getLinks().then((response) =>{
            this.setState({links:response.data})
        });
    }

    render(setUser){
        return(
            <div>
                <h1 className="text-center">Link Manager</h1>
                
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Link</td>
                            <td>Description</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.links.map(
                                link =>
                                <tr key={link.id}>
                                    <td>{link.title}</td>
                                    <td><a href={link.link} target="_blank">{link.title}</a></td>
                                    <td>{link.description}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default HomePage