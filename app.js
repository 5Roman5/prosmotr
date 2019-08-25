const car = {
    drivers:['Ivan', 'Petr'],
    getDriver: (numberDrivers = 1) => {
        document.getElementById('text').innerText=
         'voditel - ' + this.drivers[numberDrivers];
    }
};
window.onload = () => { car.getDriver(0); };
// document.querySelectorAll('.text') выборка элементов с классом текст
// document.querySelector('#text') замена  getElementById
//  внутри querySelector можно применить любой цсс селектор например ('.н1')