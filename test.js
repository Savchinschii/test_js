const names = ['Donald', 'Alex', 'Bob', 'alex', '100', 'Юрий', 'игорь']

console.log(names.sort() === names)

//1. сортирует строки из коробки
//2. сортирует по алфавиту (unicode)
//3. работает мутабельно (сортирует на месте, переставляет элементы внутри текущего массива)
//4. возвращает ссылку на исходный массив
//5. с ним часто используется reverses

const numbers = [100, 1000, 9, 88]

console.log(numbers.sort())

const compareFn = (a, b) => {
    if (a < b) {
        return -1000
    } else {
        return 1000
    }
}

// const compareFn = (a, b) => a - b

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
    {
        name: "alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
];
const ageSort = students.sort((a, b) => a.scores - b.scores);

console.log(ageSort)

// const nameSort = students.sort((a, b) => a.name < b.name ? -1 : 1)
// const nameSort = students.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)
// const nameSort = students.sort((a, b) => a.name.localeCompare(b.name))

// console.log(nameSort)

//// bubble sort

const nums = [12, 45, 91, 23, 34, 9, 77, 1]


for (let j = 0; j < nums.length - 1; j++) {
    let isSorted = true
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            isSorted = false;
            // let temp = nums[i]
            // nums[i] = nums[i + 1]
            // nums[i + 1] = temp
            [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]]
        }
    }
    if (isSorted) break
}

console.log(nums)