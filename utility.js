import { birthPlaceArray } from "./dependency.js";

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

export function randomGender() {
    return randomInteger(0, 1) ? "Laki-Laki" : "Perempuan";
}
