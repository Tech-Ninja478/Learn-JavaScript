const EquipA = ["Football", "Bat", "Ball", "Studds", "Basketball"];
const EquipB = ["Baseball", "Pads", "Helmet", "Guards", "Rugby"];

const ClothsA = ["Jersey", "Trousers", "T-Shirts"];
const ClothsB = ["Shirt", "Pants", "Jacket"];

const EquipDept = [EquipA, EquipB];
const ClothsDept = [ClothsA, ClothsB];

console.log(EquipDept[0][1]);
console.log(ClothsDept[0][1]);

const SportsDept = [EquipDept, ClothsDept];

console.log(SportsDept[0][0][4]);
console.log(SportsDept[1][1][2]);
