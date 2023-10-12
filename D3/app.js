import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

import topojson from 'https://cdn.jsdelivr.net/npm/topojson@3.0.2/+esm';

const width = 900;
const height = 600;

const svg = d3.select('body')
              .append('svg')
              .attr('width', width)
              .attr('height', height);

const projection = d3.geoMercator();
const path = d3.geoPath(projection)

const g = svg.append('g');

    d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json')
   .then(data => {

    const countries = topojson.feature(data, data.objects.countries);
    
     const paths = g.selectAll('path')
     .data(countries.feature);
      paths.geoMercatorenter().append('path')
      .attr('class', 'country').attr('d', path);

   });
















// import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

//const pBrowser = document.querySelector('p')
// const pD3 = d3.select('p')

//console.log(pBrowser)
// console.log(pD3)