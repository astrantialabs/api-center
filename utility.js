import { birthPlaceArray, nameArray, smkMajorArray } from "./dependency.js";

const gradeObject = {
    0: "X",
    1: "XI",
    2: "XII",
};

export function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomIntegerArray(min, max, amount) {
    const randomIntegerArray = [];

    for (let i = 0; i < amount; i++) {
        randomIntegerArray.push(randomInteger(min, max));
    }

    return randomIntegerArray;
}

export function randomUniqueIntegerArray(min, max, amount) {
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

export function dateToAge(dateString) {
    const dateArray = dateString.split("-");
    const dateObject = new Date(dateArray[2], parseInt(dateArray[1]) - 1, parseInt(dateArray[0]) + 1);

    const currentDateObject = new Date();

    let age = currentDateObject.getFullYear() - dateObject.getFullYear();
    const monthAge = currentDateObject.getMonth() - dateObject.getMonth();
    if (monthAge < 0 || (monthAge === 0 && currentDateObject.getDate() < dateObject.getDate())) {
        age--;
    }

    return age;
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

export function randomStudentSMK(amount) {
    let randomIntegerArray;

    if (amount > nameArray.length) {
        randomIntegerArray = randomIntegerArray(0, nameArray.length - 1, amount);
    } else if (amount <= nameArray.length) {
        randomIntegerArray = randomUniqueIntegerArray(0, nameArray.length - 1, amount);
    }

    const studentSMKResponse = randomIntegerArray.map((integerValue, integerIndex) => {
        const randomBirthDateValue = randomBirthDate("01-01-2004", "31-12-2006");

        return {
            id: integerIndex + 1,
            nis: nis(integerIndex + 1),
            name: nameArray[integerValue],
            age: dateToAge(randomBirthDateValue),
            birthPlace: randomBirthPlace(),
            birthDate: randomBirthDateValue,
            gender: randomGender(),
            grade: randomGrade(),
            major: randomSMKMajor(),
        };
    });

    return studentSMKResponse;
}
