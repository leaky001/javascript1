

const simpleInterest = (principal, rate, time, timeType) => {
    let result

    if(timeType === "Year") {

         result =  (principal * rate * time)/100

        return result 


    }else if (timeType === "month") {

        result = (principal * rate * time)/(100 * 12)

        return result .toFixed(2)


    }else if (timeType === "week") {


        result = (principal * rate * time)/(100 * 12)

        return result 

    }else if (timeType === "day") {
        result = (principal * rate * time)/(100*365)

        return result 
    }

}


const circleAreaCircum = (radius, type) => {

    const Pi = (22/7)

    if(type === "area") {
        return (Pi * radius **2)
    } else if (type === "circum") {
        return (2 *Pi*radius);
    }else if (type === "areaCircum") {
        const area = (Pi* radius **2);
        const circumference = 2 *  Pi  * radius;

        const result = {
            area: area.toFixed(2),
            circumference,
        };

        return result;
    }

    return "umdefine type"
    
}

export {simpleInterest, circleAreaCircum}



