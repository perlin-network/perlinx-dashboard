

export const getDotColor = (index) => {
    console.log("index : ", index)
    switch (index) {
        case 0:
            return "#65D6D2"
        case 1:
            return "#8FD9ED"
        case 2:
            return "#5AAEE1"
        case 3:
            return "#5181FD"
        case 4:
            return "#6C79FB"
        case 5:
            return "#dcdcdc"
        default:
            return "grey"
    }

}

export const patterns = [
    '#65D6D2',
    '#8FD9ED',
    '#5AAEE1',
    "#5181FD",
    "#6C79FB",
    "#dcdcdc"
]