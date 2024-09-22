import { Typography, Paper, useMediaQuery } from '@mui/material';
import GoogleMapReact from 'google-map-react';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Rating from '@mui/material/Rating';
import useStyles from './styles';

const Map = ({setCoordinates, setBounds, coordinates}) => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width: 600px)');

    return <>
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDDM_HOCEVu5rNcgZ5b0ylwiZpVc6MSqkU' }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e) => {
                    console.log(e);
                    setCoordinates({lat: e.center.lat, lng: e.center.lng});
                    setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw});
                }}
                onChildClick={() => {}}

            >
            </GoogleMapReact>
        </div>
        </>
}

export default Map;