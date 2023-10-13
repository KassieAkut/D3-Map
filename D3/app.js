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
