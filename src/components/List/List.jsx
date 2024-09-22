import { CircularProgress, Grid, Typography, FormControl, Select, MenuItem, InputLabel } from '@mui/material';
import usestyles from './styles';
import { useState } from 'react';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

const List = ({places}) => {
    const classes = usestyles();

    const [type, setType] = useState('restaurants');
    const [rating,setRating] = useState('');

    return (<div className={classes.container}>
        <Typography variant='h4'>Restaurants, Hotels and Attractions around you!!</Typography>
        <FormControl className={classes.formControl}>
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
                <MenuItem value='restaurants'>Restaurants</MenuItem>
                <MenuItem value='hotels'>Hotels</MenuItem>
                <MenuItem value='attraction'>Attraction</MenuItem>
            </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
            <InputLabel>Rating</InputLabel>
            <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                <MenuItem value={0}>Not Liked</MenuItem>
                <MenuItem value={3}>Above 3</MenuItem>
                <MenuItem value={4}>Above 4</MenuItem>
                <MenuItem value={4.5}>Full</MenuItem>
            </Select>
        </FormControl>

        <Grid container spacing={3} className={classes.list}>
            {places?.map((place,i) => (
                <Grid item key={i} xs={12}>
                    <PlaceDetails place={place}/>
                </Grid>
            ))}
        </Grid>
    </div>);
}

export default List;