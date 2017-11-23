        // start with strings, numbers and booleans

        // var age = 100;
        // var age2 = age;
        // console.log(age, age2);
        // age = 200;
        // console.log(age, age2);
        // The varialbe age2 is set to 100 before you reset age so this says 200 100

        // Let's say we have an array
        const players = ['jeremy', 'Sarah', 'Ryan', 'Poppy'];
        
                // and we want to make a copy of it.
        
                var team = players;
                // console.log(team, players)
                // team[3] = "bill";
        
                // console.log(team, players)
                // when you update any of the references to the original array, all the arrays are updated
        
        
                // You might think we can just do something like this:
        
                // however what happens when we update that array?
        
                // now here is the problem!
        
                // oh no - we have edited the original array too!
        
                // Why? It's because that is an array reference, not an array copy. They both point to the same array!
        
                // So, how do we fix this? We take a copy instead!
        
                // one way
        
                var team2 = players.slice();
                team2[3] = "Lux"
                    // console.log(players, team2)
        
                // or create a new array and concat the old one in
        
                var team3 = [].concat(players);
                team3[1] = "Jeremy";
                console.log(players, team2, team3)
        
                // or use the new ES6 Spread
        
                var team4 = [...players]; // This is a spread which takes every item out of the data structure and places it into the new data structure
                var team5 = Array.from(players);
                console.log(players, team2, team3, team4, team5)
        
        
                // now when we update it, the original one isn't changed
        
                // The same thing goes for objects, let's say we have a person object
        
                const person = {
                    name: 'Jeremy Tong',
                    age: 34
                };
        
                // with Objects
        
                // and think we make a copy:
        
                var captain = person;
                captain.number = 99;
        
        
                // how do we take a copy instead?
        
                var cap2 = Object.assign({}, person, {
                    number: 99,
                    age: 12
                });
                console.log(cap2);
        
                // We will hopefully soon see the object ...spread  #####  This works now!
        
                var cap3 = {...person
                };
                console.log(cap3);
        
                // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
                const jeremy = {
                    name: 'jeremy',
                    age: 34,
                    social: {
                        twitter: '@jeremytong',
                        facebook: 'jeremytong.developer'
                    }
                };
        
                console.clear();
                console.log(jeremy);
        
                const dev = Object.assign({}, jeremy);