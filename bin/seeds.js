const mongoose = require('mongoose');
const Truck = require('../models/truck');
const Driver = require('../models/driver');

const dbName = 'monstertruck-project';
mongoose.connect(`mongodb://localhost/${dbName}`);
//Truck.collection.drop();
Driver.collection.drop();
// const trucks = [
//     {
//         name: "Grave Digger",
//         driver: ["Adam Anderson", "Morgan Kane", "Charlie Pauken", "Randy Brown", "Krysten Anderson", "Brandon Vinson", "Tyler Menninga"],
//         image: "https://cdn.monsterjam.com/legacy_monster_jam/GraveDigger16_02.jpg",
//         year: 1982,
//         body: "1950 Chevy Panel Van",
//         engine: "540 cubic inch Merlin 1450hp",
//         transmission: "Coan 2-speed transmission"
//     },
//     {
//         name: "Son-uva Digger",
//         driver: ["Ryan Anderson"],
//         image: "https://cdn.monsterjam.com/legacy_monster_jam/Son-uvaDigger16_01_1.jpg",
//         year: 2011,
//         body: "1950's Willy's Body Style",
//         engine: "540 cubic inch Merlin 1450hp",
//         transmission: "Coan 2-speed transmission"
//     },
//     {
//         name: "Dragon",
//         driver: ["Scott Liddycoat", "Jon Zimmer"],
//         image: "https://cdn.monsterjam.com/legacy_monster_jam/Dragon16_02.jpg",
//         year: 2014,
//         body: "Custom Dragon",
//         engine: "540 cubic inch Merlin 1450hp",
//         transmission: "Coan 2-speed transmission"
//     },
//     {
//         name: "Whiplash",
//         driver: ["Brianna Mahon", "Cynthia Gauthier"],
//         image: "https://cdn.monsterjam.com/styles/twitter_card/s3/legacy_monster_jam/Whiplash%20Truck.jpg.png?itok=EXrmQOZ8",
//         year: 2018,
//         body: "1941 Willys Pick-up",
//         engine: "540 cubic inch Merlin 1450hp",
//         transmission: "Coan 2-speed transmission"
//     },
//     {
//         name: "Maximum Destruction (Max-D)",
//         driver: ["Tom Meents", "Neil Elliott", "Colton Eichelberger", "Jared Eichelberger"],
//         image: "https://cdn.monsterjam.com/legacy_monster_jam/Max-D16_01.jpg",
//         year: 2003,
//         body: "2000 Futuristic SUV",
//         engine: "540 cubic inch Merlin 1450hp",
//         transmission: "Coan 2-speed transmission"
//     },
//     {
//         name: "Black Stallion",
//         driver: ["Michael Vaters"],
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQduYHh5FuAYGyaCOhLDrMrOWEgRtuKoKO7cqZACuq8smZsL3cnBA",
//         year: 1981,
//         body: "2008 Ford F-150",
//         engine: "540 C.I. Ford Performance",
//         transmission: "2-speed FTI Performance Powerglide w/ Profab drop down quick change transfer case"
//     },
//     {
//         name: "Megalodon",
//         driver: ["Alex Blackwell", "Justin Sipes", "Travis Groth", "Trent Montgomery"],
//         image: "https://cdn.monsterjam.com/legacy_monster_jam/Megalodon%20real.jpg",
//         year: 2017,
//         body: "Custom 3D Shark Body Style",
//         engine: "540 cubic inch Merlin 1450hp",
//         transmission: "Coan 2-speed transmission"
//     },
//     {
//         name: "Monster Energy",
//         driver: ["Todd LeDuc"],
//         image: "https://media.motoonline.com.au/wp-content/uploads/2014/08/MonsterEnergy14_10-Wheelie.jpg",
//         year: 2012,
//         body: "Escalade",
//         engine: "540 cubic inch Merlin 1450hp",
//         transmission: "Coan 2-speed transmission"
//     },
//     {
//         name: "Zombie",
//         driver: ["Tyler Groth", "Bari Musawwir", "Ami Houde"],
//         image: "http://www.amsinclv.com/wp-content/uploads/2017/03/Zombie-1-min-1024x684.jpg",
//         year: 2013,
//         body: "Custom Ford F-150",
//         engine: "540 cubic inch Merlin 1450hp",
//         transmission: "Coan 2-speed transmission"
//     },
//     {
//         name: "Soldiers Fortune Black Ops",
//         driver: ["Tony Ochs"],
//         image: "https://cdn.monsterjam.com/legacy_monster_jam/SoldierFortune%20%20Black%20ops%20thumb.jpg",
//         year: 2016,
//         body: "Custom Body",
//         engine: "540 cubic inch Merlin 1450hp",
//         transmission: "Coan 2-speed transmission"
//     },
// ]

const drivers = [
    {
        firstName: "Cynthia",
        lastName: "Gaulthier",
        //truck_id: { ObjectId: ("5b258bc24198eda382a6c23b") },
        birthday: "25.06.1985",
        image: "https://vignette.wikia.nocookie.net/monstertruck/images/9/94/C00QZkJC.jpg",
    },
    {
        firstName: "Neil",
        lastName: "Elliott",
        //truck_id: { ObjectId: ("5b258bc24198eda382a6c23c") },
        birthday: "30.11.1975",
        image: "https://vignette.wikia.nocookie.net/monstertruck/images/1/10/67835f11-2ac6-4833-9ded-d1542b5d17d2.jpg",
    },
    {
        firstName: "Alex",
        lastName: "Blackwell",
        //truck_id: { ObjectId: ("5b258bc24198eda382a6c23e") },
        birthday: "02.06.1973",
        image: "https://vignette.wikia.nocookie.net/monstertruck/images/f/f1/Alex_Blackwell_Captain_s_Curse_Monster_Jam_Driver-1299781890.jpg",
    },
    {
        firstName: "Brianna",
        lastName: "Mahon",
        //truck_id: { ObjectId: ("5b258bc24198eda382a6c23b") },
        birthday: "06.03.1990",
        image: "https://usatbnqt.files.wordpress.com/2018/01/mahon_brianna17.jpg",
    },
    {
        firstName: "Todd",
        lastName: "LeDuc",
        //truck_id: { ObjectId: ("5b258bc24198eda382a6c23f") },
        birthday: "18.01.1986",
        image: "https://www.f150online.com/wp-content/uploads/2014/03/photo-17.jpg",
    },
    {
        firstName: "Morgan",
        lastName: "Kane",
        //truck_id: { ObjectId: ("5b258bc24198eda382a6c238") },
        birthday: "24.03.1990",
        image: "https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-1/28958372_1623323021084948_5943745927436042240_n.jpg?_nc_cat=0&oh=2b063554f69e6b8689de8e16bd2447cc&oe=5BB10454",
    },
    {
        firstName: "Krysten",
        lastName: "Anderson",
        //truck_id: { ObjectId: ("5b258bc24198eda382a6c238") },
        birthday: "16.05.1997",
        image: "https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/31283471_937191289772849_7441475940897458324_n.jpg?_nc_cat=0&oh=9304bbe9dfb5b9aaf3963934d7a81a3b&oe=5BB346EA",
    },
    {
        firstName: "Ryan",
        lastName: "Anderson",
        //truck_id: { ObjectId: ("5b258bc24198eda382a6c239") },
        birthday: "16.11.1982",
        image: "https://vignette.wikia.nocookie.net/monstertruck/images/a/ad/4b0ddd46-5ae5-4c2e-ad08-58807b20bacf.jpg",
    },
    {
        firstName: "Adam",
        lastName: "Anderson",
        //truck_id: { ObjectId: ("5b258bc24198eda382a6c238") },
        birthday: "05.12.1985",
        image: "https://vignette.wikia.nocookie.net/monstertruck/images/6/60/Adam_anderson.png",
    },
]

// Truck.create(trucks, (err) => {
//     if (err) { throw (err) }
//     console.log(`Created ${trucks.length} trucks`)
//     mongoose.connection.close()
// });

Driver.create(drivers, (err) => {
    if (err) { throw (err) }
    console.log(`Created ${drivers.length} drivers`)
    mongoose.connection.close()
});