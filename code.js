//Most of this is inspired by https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/
function dijkstra(graph, sourceNode) {
    var dist = new Array(graph.length);
    var markVert = [];

    for(var i = 0; i < graph.length; i++) { //This is essentially step 1 in the psuedocode
        dist[i] = Number.POSITIVE_INFINITY;
        markVert[i] = false;
    }

    dist[sourceNode] = 0; //Distance from the source node to itself it always zero

    for(var i = 0; i < graph.length - 1; i++) {

        var min = minDist(dist,markVert); //Step 2 in the psuedocode
        markVert[min] = true; 

        for(var j = 0; j < graph.length; j++) { //Step three in the pseudocode
             dist[j] = dist[min] + graph[min][j];
        }
    }
    return dist;
}

//This function just finds the minimum distance
function minDist(dist,markVert) {
    var minIndex;
    var min = Number.POSITIVE_INFINITY;

    for(var i = 0; i < graph.length; i++)
    {
        if(dist[i] <= min && markVert == false) { //If the distance is smaller than the min and the verticie hasent been marked yet. Make it the new values
            min = dist[i];
            minIndex = i;
        }
    }
    return minIndex;
}

console.log(dijkstra(graph,0));

console.log(graph[0][0]);