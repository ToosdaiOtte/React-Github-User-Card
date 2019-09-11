import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({

    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  }));

function PersonalGitCard(props){

    let classes = useStyles();
    let [expanded, setExpanded] = React.useState(false);

    function handleExpandClick(){
        setExpanded(!expanded);
    }

    return(
        <div>
        <h1>Github User: </h1>
        <Card className="card">
            <div style={{margin: '0 auto'}}>
                <div className="shown">
                    <CardMedia ><img  src={props.data.avatar_url} alt={props.data.name} className="card-img"/></CardMedia>
                    <CardHeader
                        title={props.data.name}
                    />     
                </div>

            <CardActions disableSpacing>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <a href={props.data.url}>{props.data.url}</a>
                <p>{props.data.location}</p>
                <p>Following: {props.data.following}</p>
                <p>Followers: {props.data.followers}</p>
              </CardContent>
            </Collapse>
          </div>  
          </Card>
        </div> 
    );
}

export default PersonalGitCard;
