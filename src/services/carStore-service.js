class CarStoreService {
     static getCars() {
        return [
            {model:'BMW X6',price:'100 000 $',imageLink:'https://www.free-wallpapers.su/data/media/8251/big/car25599.jpg',carId:1},
            {model:'AUDI RS6',price:'80 000 $',imageLink:'https://www.a777aa77.ru/audi-2/2020-audi-rs6-avant.jpg',carId:2},
            {model:'MERCEDES S63 AMG',price:'120 000 $',imageLink:'https://avtovesti.com/wp-content/uploads/2016/06/mercedes-s63-amg-coupe-tuning-renntech-2.jpg',carId:3}
            ];
    }
    static getDetails(id){
         switch (id){
             case '1':
                 return {
                     model:'BMW X6',
                     price:'100 000 $',
                     imageLink:'https://www.free-wallpapers.su/data/media/8251/big/car25599.jpg',
                     odometer:'40 000 km',
                     color:'black',
                     engineType: '3.0 L',
                     transmission: 'AUTOMATIC',
                     drive: 'All wheel drive'
                 }
             case '2':
                 return {
                     model:'AUDI RS6',
                     price:'80 000 $',
                     imageLink:'https://www.a777aa77.ru/audi-2/2020-audi-rs6-avant.jpg',
                     odometer:'60 000 km',
                     color:'black',
                     engineType: '2.0 L',
                     transmission: 'AUTOMATIC',
                     drive: 'All wheel drive'
                 }
             case '3':
                 return {
                     model:'MERCEDES S63 AMG',
                     price:'120 000 $',
                     imageLink:'https://avtovesti.com/wp-content/uploads/2016/06/mercedes-s63-amg-coupe-tuning-renntech-2.jpg',
                     odometer:'10 000 km',
                     color:'grey',
                     engineType: '4.0 L',
                     transmission: 'AUTOMATIC',
                     drive: 'All wheel drive'
                 }
         }
    }
}
export {
    CarStoreService
}
