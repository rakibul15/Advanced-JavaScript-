const students = [

    {id: 12, name: "Deepika Padokone"},
    {id: 17, name: "Katrina Kaif"},
    {id: 20, name: "Noora Fatehi"},
    {id: 22, name: "Shadhra Kapor"},
    {id: 30, name: "Alia Bhat"}
];
 let heroine= students.map( s=> s.name);
 let bigger =students.filter( s=> s.id>20);
 console.log(heroine);
 console.log(bigger);