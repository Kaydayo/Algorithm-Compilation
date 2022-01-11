type ListOfPoints = {
    name: string;
    connections: Array<string>
}



function pathBetweenPoints(pointsArr: Array<ListOfPoints>, x: string, y: string): string {

    let result: string[] = [];
    let path: string = `${x}`
    result.push(x)
    let points: string[] = pointsArr.map(point => point.name)
    console.log(points)
    if (!(points.includes(x)) || !(points.includes(y))) {
        return 'no path';
    }


    function helperNext(str: string, y: string): void {
        if (str === y) {
            return;
        }
        let newStr: ListOfPoints = pointsArr.find(point => point.name === str)
        let nextStr: string = newStr.connections[0]
        let nextOneStr: string = newStr.connections[1]
        let newNext = '';
        if (result.includes(nextStr)) {
            result.push(nextOneStr)
            newNext = nextOneStr;
        } else {
            result.push(nextStr)
            newNext = nextStr
        }
        return helperNext(newNext, y)

    }

    helperNext(x, y)
    if (result.length <= 1) {
        return 'no path'
    } else {
        for (let i = 1; i < result.length; i++) {
            path += ` -> ${result[i]} `
        }
    }
    return path;


}

let listOfPoints = [
    { name: "A", connections: ["B", "C"] },
    { name: "B", connections: ["A", "E"] },
    { name: "C", connections: ["A", "D"] },
    { name: "D", connections: ["C"] },
    { name: "E", connections: ["B", "F"] },
    { name: "F", connections: ["E"] },
]

console.log(pathBetweenPoints(listOfPoints, "A", "B"))