import 'bootstrap';
import './scss/app.scss';
import Splide from '@splidejs/splide';
import Grid from '@splidejs/splide-extension-grid';

// new Splide( '.main-slider' ).mount( { Grid } );
new Splide('.main-slider', {
    type: 'loop',
    perPage: 1,
    perMove: 1,
}).mount({ Grid });