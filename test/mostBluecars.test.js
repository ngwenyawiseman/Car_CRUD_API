import assert from 'assert';
import mostBluecars from '../mostBluecars.js'; 
import cars from '../cardata.js'; 

describe('The mostBluecars function', function () {
    it('must determine what the most common blue car in the array is', function () {
        assert.equal(mostBluecars(cars), 'Volkswagen Jetta'); 
    });

    it('should return null if there are no blue cars', function () {
        const noBlueCars = [
            { "color": "white", "make": "Volkswagen", "model": "Polo", "reg_number": "CL 61045" },
            { "color": "red", "make": "Toyota", "model": "Tazz", "reg_number": "CY 16875" }
        ];
        assert.equal(mostBluecars(noBlueCars), null);
    });

    it('should return the correct car when there is only one blue car', function () {
        const singleBlueCar = [
            { "color": "blue", "make": "Toyota", "model": "Yaris", "reg_number": "CL 9538" }
        ];
        assert.equal(mostBluecars(singleBlueCar), 'Toyota Yaris');
    });
});
