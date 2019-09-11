import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

function FollowerCard(props){

    return(
      <div className="followers">
          <h2>{props.data.name}'s Followers: </h2>
        {props.followers.map(follower => {
            return(
                <Card className="card">
                    <CardContent className="shown">
                        <CardMedia><img className="card-img" src={follower.avatar_url} alt={follower.name} /></CardMedia>
                        <div className="shown-right">
                            <CardHeader
                                title={follower.login}
                            />
                            <a href={follower.url}>{follower.url}</a>                           
                        </div>

                    </CardContent>

                </Card>
            
            )
        })} 
        </div>
    )
}


export default FollowerCard;
