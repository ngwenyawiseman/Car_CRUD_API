function mostBluecars(cars) {
    const carCount = {};

    // Count occurrences of each blue car
    for (const car of cars) {
        if (car.color === 'blue') {
            const key = `${car.make} ${car.model}`;
            if (!carCount[key]) {
                carCount[key] = 1;
            } else {
                carCount[key]++;
            }
        }
    }

    // Find the most common blue car
    let mostCommonCar = null;
    let maxCount = 0;

    for (const [car, count] of Object.entries(carCount)) {
        if (count > maxCount) {
            maxCount = count;
            mostCommonCar = car;
        }
    }

    console.log('Car Count:', carCount); // Log the car count for debugging
    console.log('Most Common Car:', mostCommonCar); // Log the most common car

    return mostCommonCar;
}

export default mostBluecars;
