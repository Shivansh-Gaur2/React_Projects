import sql from 'better-sqlite3';

const db = sql('meals.db');
// making db object by passing 
// calling the function and passing 
// the name of the database file

export async function getMeals(){
    // async funtion will return a promise
    await new Promise((resolve) => setTimeout(resolve, 5000));

    // normally wont add this promise as it will slow data but added headers
    // just for demo

    // throw new Error('Could not fetch meals');
     // to test the error page

   return db.prepare('SELECT * FROM meals').all();
//    prepare a new SQL statemanet where i want to call all 
//    columns from the meals table

// .run() is used when you want to add Data, .all() when you want to retrieve multiple RowingSharp
// and .get() when you want to retrieve only a single row
}

export function getMeal(slug){
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
    // add dynamic values by ? and adding the value of ? with .get() function
}