export class Person{
    // modelis skirtas sukurti objektui, ts gudrybe rasyti kintamuosius tiesiai i construktoriu
        constructor(
            public id:number,
            public firstName:string,
            public lastName:string,
            public personalID:string,
            public dateOfBirth:string,
            public gender:string,

    
        ){
    
        }
    }