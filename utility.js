import { birthPlaceArray, smkMajorArray } from "./dependency.js";

const gradeObject = {
    0: "X",
    1: "XI",
    2: "XII",
};

export function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomUniqueInteger(min, max, amount) {
    const randomUniqueIntegerArray = [];

    for (let i = 0; i < amount; i++) {
        let randomIntergerValue = randomInteger(min, max);

        if (!randomUniqueIntegerArray.includes(randomIntergerValue)) {
            randomUniqueIntegerArray.push(randomIntergerValue);
        } else if (randomUniqueIntegerArray.includes(randomIntergerValue)) {
            i--;
        }
    }

    return randomUniqueIntegerArray;
}

export function zfill(value, fillValue, fillLength) {
    return fillValue.repeat(fillLength - value.length) + value;
}

export function nis(value) {
    return zfill(String(value), "0", 8);
}

export function randomBirthPlace() {
    return birthPlaceArray[randomInteger(0, birthPlaceArray.length - 1)];
}

export function randomBirthDate(start, end) {
    const startArray = start.split("-");
    const startDate = new Date(startArray[2], parseInt(startArray[1]) - 1, parseInt(startArray[0]) + 1);

    const endArray = end.split("-");
    const endDate = new Date(endArray[2], parseInt(endArray[1]) - 1, parseInt(endArray[0]) + 1);

    const randomBirthDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));

    return `${randomBirthDate.getDate()}-${randomBirthDate.getMonth()}-${randomBirthDate.getFullYear()}`;
}

export function randomGender() {
    return randomInteger(0, 1) ? "Laki-Laki" : "Perempuan";
}

export function randomGrade() {
    const randomIntergerValue = randomInteger(0, 2);

    return gradeObject[randomIntergerValue];
}

export function randomSMKMajor() {
    return smkMajorArray[randomInteger(0, smkMajorArray.length - 1)];
}
