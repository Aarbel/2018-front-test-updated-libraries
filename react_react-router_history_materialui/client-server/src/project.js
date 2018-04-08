import React, { Component } from 'react';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';

export class Project extends Component {

    state = {
        project: '',
    }

    componentWillMount() {
        fetch('http://localhost:2000/api/projects/' + 
            this.props.match.params.id).then(response => {

                response.json().then(fetchedProject => 

                    this.setState({ project : fetchedProject })
                )

            }).catch(function(error) {
                console.log('Il y a eu un problème avec l\'opération fetch: ' + 
                error.message);
            }
        )
    }

    render() {

        const { project } = this.state 

        return (
            <Card>
                <CardMedia overlay={
                    <CardTitle title={ project.name } />
                    }>

                    <img src={ project.image } 
                        alt="" />

                </CardMedia>
                <CardText>
                    { project.description }
                </CardText>
            </Card>
        )
    }
}