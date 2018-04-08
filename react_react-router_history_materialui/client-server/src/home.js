import React, { Component } from 'react';
import history from './history'

export class Home extends Component {

    state = {
        projects: [{}],
    }
    
    componentWillMount() {
        fetch('http://localhost:2000/api/projects').then(response => {
            response.json().then(fetchedProjects => 
            this.setState({ projects : fetchedProjects })
            )
        }).catch(function(error) {
            console.log('Il y a eu un problème avec l\'opération fetch: ' + 
            error.message);
        })
    }
  
    renderProjectsCards = () => (
        this.state.projects.map((project, index) => (
            <div key={index} 
                 className="project-card"
                 onClick={() => {
                    history.push('/project/' + project.id)
                 }}>
    
                <img alt="" 
                     src={project.image} />
                
                <div className="project-name">
                    { project.name }
                </div>
    
            </div>
        ))
    )
  
    render() {

        return (
            <div className="project-cards">
                { this.renderProjectsCards() }
            </div>
        )
    }
  
}