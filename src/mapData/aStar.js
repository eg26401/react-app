import { end } from "@popperjs/core";
import transformedData from "./nodeStations"



async function findIfAccessible(stationId) {
    const apiBaseUrl = "https://api.tfl.gov.uk";
    const appId = "your-app-id"; // Replace with your TfL App ID
    const appKey = "your-app-key"; // Replace with your TfL App Key
    let accessible = false; // Default to false

    try {
        // Fetch station information from TfL API
        const response = await fetch(`${apiBaseUrl}/StopPoint/${stationId}?app_id=${appId}&app_key=${appKey}`);
        if (!response.ok) {
            throw new Error(`TfL API error: ${response.status} ${response.statusText}`);
        }

        const stationData = await response.json();

        // Check for accessibility information in the response
        const accessibilityData = stationData.additionalProperties?.find(
            prop => prop.category === "Accessibility" && prop.key === "StepFreeAccess"
        );

        if (accessibilityData) {
            accessible = accessibilityData.value.toLowerCase() === "yes";
        } else {
            console.warn("Accessibility data not available for this station.");
        }
    } catch (error) {
        console.error("Error fetching accessibility data:", error);
    }

    return accessible;
}

// Example usage
(async () => {
    const stationId = "940GZZLUWLO"; // Replace with the station ID you want to check
    const accessible = await findIfAccessible(stationId);
    console.log(`Station ${stationId} is ${accessible ? "wheelchair accessible" : "not wheelchair accessible"}`);
})();


function neighbors(graphdata){
    var unevaluated = []

    for(station in data){
        unevaluated.push(station)
        unevaluated.sort((a,b)=>a[1]-b[1])
        
    }
}


var startStation = 


function findHeurustic(){
    if(least_change_overs == false && accessibility == false){
        var heuristic = time;

    }
    else if (least_change_overs == true){
        var heuristic = time + (changeovers*3)
    }
    else if (accessible == true){
        var heuristic = time + (inaccessible * 999) 
    }
    return heuristic;
}







function aStar(start, end, graphdata, heuristic){
    
    
    const n = 270
    var unevaluated= []; //nodes evaulated 
    var evaluated = []; //nodes dsicovered but to be evaluated
    var came_from= []; //nodes that we came from
    var g_score = [9999]; //cost from start to node
    var f_score = [9999]; //cost from start to node + heuristic
    
    unevaluated.push(start)
    
    while (unevaluated.length()>0){
        var current = unevaluated[0]; //this will be lowest f(n) as its a priority queue
        if (current == end){
        came_from.push(current) 
        return came_from
    }
        unevaluated.pop(current)
        evaluated.push(current)

        for(let neighbor of graphdata[current]){    
            if (unevaluated.has(neighbor)) continue;
            let tentative_g_score= g_score[current] + cost(current,neighbor);

            if (!unevaluated.has(neighbor)){
                unevaluated.push(neighbor) //dsicover new node
            }
            else if (tentative_g_score >= g_score[neighbor]){
                continue; //not better path 
            }

            came_from[neighbor]= current;
            g_score[neighbor] = tentative_g_score;
            f_score[neighbor] = tentative_g_score + heuristic(neighbor, end, graphdata)
      
    }
 return[]; //empty array for no path

   

}

function tracePath(camFrom,current){
    let totalPath = [current]
    while (current in came_from){
        current = came_from[current]
        totalPath.push(current)
    }
    return totalPath.reverse()
}


}



    /*
    //Initialise the priority queue and add the start node 
    priority_queue = [] 
    heapq.heappush(priority_queue, (h_score[start], start)) 

    //Initialise the start node 
    g_score[start] = 0 
    f_score[start] = h_score[start] 

    target_reached = False 

    while priority_queue and not target_reached: 

        //Pop the node with the lowest f-score 
        _, current = heapq.heappop(priority_queue) 

 
        //If the current node is already visited, skip to the next iteration 
        if not visited[current]: 

            //Mark the current node as visited 
            visited[current] = True 

            //If the current node is the target, update the flag 
            if current == target: 
                target_reached = True 

            # Visit the neighbors of the current node 
            for neighbour in range(n): 
                if graph[current][neighbour] > 0 and not visited[neighbour]: 

                    tentative_g_score = g_score[current] + graph[current][neighbour] 

                    if tentative_g_score < g_score[neighbour]: 
                        g_score[neighbour] = tentative_g_score 
                        f_score[neighbour] = tentative_g_score + h_score[neighbour] 
                        previous[neighbour] = current 
                        heapq.heappush(priority_queue, (f_score[neighbour], neighbour)) 

    return visited, previous, g_score, f_score 

}
    */