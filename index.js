import * as d3 from 'd3-scale-chromatic';

function calculatePoint(i, intervalSize, colorRangeInfo) {
    var { colorStart, colorEnd, endAsStart } = colorRangeInfo;
    return (endAsStart
      ? (colorEnd - (i * intervalSize))
      : (colorStart + (i * intervalSize)));
}
  
export default function colors(dataLength, palette, colorRangeInfo) {

    switch(palette){
        case "ORANGE":
            var colorScale = d3.interpolateOranges;
            break;
        case "INFERNO":
            var colorScale = d3.interpolateInferno;
            break;
        case "RAINBOW":
            var colorScale = d3.interpolateRainbow;
            break;
        case "SPECTRAL":
            var colorScale = d3.interpolateSpectral;
            break;
        case "COOL":
            var colorScale = d3.interpolateRdYlBu;
            break;
    }

    var { colorStart, colorEnd } = colorRangeInfo;
    var colorRange = colorEnd - colorStart;
    var intervalSize = colorRange / dataLength;
    var i, colorPoint;
    var colorArray = [];
  
    for (i = 0; i < dataLength; i++) {
      colorPoint = calculatePoint(i, intervalSize, colorRangeInfo);
      colorArray.push(colorScale(colorPoint));
    }
  
    return colorArray;
}

// module.exports = {colors};