import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import topojson from 'https://cdn.jsdelivr.net/npm/topojson@3.0.2/+esm'
import { feature } from '.\topojson';

const width = 900;
const height = 600;

const svg = d3.select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

const projection = d3.geoMercator();
const path = d3.geoPath(projection);

const g = svg.append('g');

async function getTopo() {
  d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json')
    .then((data) => {
      const countries = feature(data, data.objects.countries);
  g.selectAll('path')
    .data(countries.features)
    .enter().append('path')
    .attr('class', 'country')
    .attr('d', path);
    });
}

getTopo();




var width = 900;
 var height = 600;
 
 var svg = d3.select('body')
   .append('svg')
   .attr('width', width)
   .attr('height', height);
 
var projection = d3.geoNaturalEarth1().translate([width/2, height/2])
 .scale(3000)
 .center([-5, 53]); // Adjust the center and scale accordingly
 var path = d3.geoPath(projection);
 
 var g = svg.append('g');
 
 d3.json('https://yamu.pro/gb.json', function(error, data) {
   if (error) {
     console.error(error);
     return;
   }
 
   console.log(data);
 
   g.selectAll('.country') // Use .country to select elements with the "country" class
     .data(data.features)
     .enter().append('path')
     .attr('class', 'country')
     .attr('d', path);
 });
