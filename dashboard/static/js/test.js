CREDENTIAL_PATH = '/Users/asmita/Desktop/Columbia/Fall 2021/Big Data Analytics/HW3/hw3_startcode_and_data/hw3/ak4581-6893-753ac23dca55.json'


d3.csv("{%  static 'movie_data.csv' %}", function(data) {

    var svg = d3.select("#graph2"),
        margin = 200,
        width = svg.attr("width") - margin,
        height = svg.attr("height") - margin


    var xScale = d3.scaleLinear().domain([3.5, 10]).range([0, width]),
        yScale = d3.scaleLinear().domain([0, 1]).range([height, 0]);

    var g = svg.append("g")
        .attr("transform", "translate(" + 100 + "," + 100 + ")");


    svg.append('text')
        .attr('x', width / 2 + 100)
        .attr('y', 100)
        .attr('text-anchor', 'middle')
        .style('font-family', 'Helvetica')
        .style('font-size', 20)
        .text('Negative Reviews');


    svg.append('text')
        .attr('x', width / 2 + 100)
        .attr('y', height - 15 + 150)
        .attr('text-anchor', 'middle')
        .style('font-family', 'Helvetica')
        .style('font-size', 12)
        .text('IMDb Rating');


    svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('transform', 'translate(60,' + height + ')rotate(-90)')
        .style('font-family', 'Helvetica')
        .style('font-size', 12)
        .text('Percentage of Negative Sentiment');

    g.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xScale));

    g.append("g")
        .call(d3.axisLeft(yScale));

    svg.append('g')
        .selectAll("dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function (d) {
            return xScale(d["rating"]);
        })
        .attr("cy", function (d) {
            return yScale(d["neg"]);
        })
        .attr("r", 1.5)
        .attr("transform", "translate(" + 100 + "," + 100 + ")")
        .style("fill", "#cd1e0e")
        .append("text")

})


d3.csv("{%  static 'all_movie_data_with_sentiment.csv' %}", function(data) {

    var svg = d3.select("#graph1"),
        margin = 200,
        width = svg.attr("width") - margin, //300
        height = svg.attr("height") - margin //200

    var xScale = d3.scaleLinear().domain([3.5, 10]).range([0, width]),
        yScale = d3.scaleLinear().domain([0, 1]).range([height, 0]);

    var g = svg.append("g")
        .attr("transform", "translate(" + 100 + "," + 100 + ")");

    svg.append('text')
        .attr('x', width / 2 + 100)
        .attr('y', 100)
        .attr('text-anchor', 'middle')
        .style('font-family', 'Helvetica')
        .style('font-size', 20)
        .text('Positive Reviews');

    svg.append('text')
        .attr('x', width / 2 + 100)
        .attr('y', height - 15 + 150)
        .attr('text-anchor', 'middle')
        .style('font-family', 'Helvetica')
        .style('font-size', 12)
        .text('IMDb Rating');

    svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('transform', 'translate(60,' + height + ')rotate(-90)')
        .style('font-family', 'Helvetica')
        .style('font-size', 12)
        .text('Percentage of Positive Sentiment');

    g.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xScale));

    g.append("g")
        .call(d3.axisLeft(yScale));

    svg.append('g')
        .selectAll("dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function (d) {
            return xScale(d["rating"]);
        })
        .attr("cy", function (d) {
            return yScale(d["pos"]);
        })
        .attr("r", 1.5)
        .attr("transform", "translate(" + 100 + "," + 100 + ")")
        .style("fill", "#496fa7")
        .append("text")

})


d3.csv("{%  static 'movie_data.csv' %}", function(data) {

    var svg = d3.select("#graph3"),
        margin = 200,
        width = svg.attr("width") - margin,
        height = svg.attr("height") - margin

    var xScale = d3.scaleLinear().domain([0, 10]).range([0, width]),
        yScale = d3.scaleLinear().domain([0, 1]).range([height, 0]);

    var g = svg.append("g")
        .attr("transform", "translate(" + 100 + "," + 100 + ")");

    svg.append('text')
        .attr('x', width / 2 + 100)
        .attr('y', 100)
        .attr('text-anchor', 'middle')
        .style('font-family', 'Helvetica')
        .style('font-size', 20)
        .text('Negative Reviews');

    svg.append('text')
        .attr('x', width / 2 + 100)
        .attr('y', height - 15 + 150)
        .attr('text-anchor', 'middle')
        .style('font-family', 'Helvetica')
        .style('font-size', 12)
        .text('IMDb Rating');

    svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('transform', 'translate(60,' + height + ')rotate(-90)')
        .style('font-family', 'Helvetica')
        .style('font-size', 12)
        .text('Percentage of Negative Sentiment');

    g.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xScale));

    g.append("g")
        .call(d3.axisLeft(yScale));

    svg.append('g')
        .selectAll("dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function (d) {
            return xScale(d["rating"]);
        })
        .attr("cy", function (d) {
          console.log(d["tweet_neg"]);
            return yScale(d["tweet_neg"]);
        })
        .attr("r", 1.5)
        .attr("transform", "translate(" + 100 + "," + 100 + ")")
        .style("fill", "#cd1e0e")
        .append("text")

})

d3.csv("{%  static 'movie_data.csv' %}", function(data) {

    var svg = d3.select("#graph4"),
        margin = 200,
        width = svg.attr("width") - margin, //300
        height = svg.attr("height") - margin //200

    var xScale = d3.scaleLinear().domain([0, 10]).range([0, width]),
        yScale = d3.scaleLinear().domain([0, 1]).range([height, 0]);

    var g = svg.append("g")
        .attr("transform", "translate(" + 100 + "," + 100 + ")");

    svg.append('text')
        .attr('x', width / 2 + 100)
        .attr('y', 100)
        .attr('text-anchor', 'middle')
        .style('font-family', 'Helvetica')
        .style('font-size', 20)
        .text('Positive Reviews');

    svg.append('text')
        .attr('x', width / 2 + 100)
        .attr('y', height - 15 + 150)
        .attr('text-anchor', 'middle')
        .style('font-family', 'Helvetica')
        .style('font-size', 12)
        .text('IMDb Rating');

    svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('transform', 'translate(60,' + height + ')rotate(-90)')
        .style('font-family', 'Helvetica')
        .style('font-size', 12)
        .text('Percentage of Positive Sentiment');

    g.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xScale));

    g.append("g")
        .call(d3.axisLeft(yScale));

    svg.append('g')
        .selectAll("dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function (d) {
            return xScale(d["rating"]);
        })
        .attr("cy", function (d) {
            return yScale(d["tweet_pos"]);
        })
        .attr("r", 1.5)
        .attr("transform", "translate(" + 100 + "," + 100 + ")")
        .style("fill", "#496fa7")
        .append("text")

})