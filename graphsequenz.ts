import chalk from "chalk";

function check(sequence: number[]) {
    console.log(chalk.blue('Hello world!'));
    let sortedsequence = sortSequence(sequence)
    const originalArray = [...sortedsequence]

    let iterationCounter = 1;
    try {
        while (!sortedsequence.every((element) => element === 0)) {
            console.log("------");
            console.log(`Iteration: ${iterationCounter}`);
            console.log(`sequence: (${sortedsequence})`);

            const firstElement = sortedsequence.shift();
            if (!firstElement) {
                break;
            }
            console.log(`erstes Element ist (${firstElement}) also wird es aus der sequence entfernt`)
            sortedsequence = decreasesequence(sortedsequence, firstElement)
            iterationCounter++
        }
        console.log(`\nBei der Graphfolge: (${originalArray}) handelt es sich um einen Graphen`);
    } catch (error) {
        console.error(error);
    }
}

function decreasesequence(sequence: number[], count: number): number[] {
    if (sequence.length < count) {
        throw new Error("zu wenige Elemente in der sequence");
    }
    const decreaseValue = 1;
    const originalsequence = [...sequence]
    console.log("\n-- Verringerung wird gestartet --");

    console.log(`Squenz vor der Verringerung: (${originalsequence})`);
    console.log(`es sollen die ersten ${count} Elemente um ${decreaseValue} verringert werden.`);

    let changesNumbers: number[] = []
    let untouchedNumbers: number[] = originalsequence.slice(count,originalsequence.length)
    for (let i = 0; i < count; i++) {
        const currentNumber = sequence[i];
        const reducedElement = currentNumber - decreaseValue
        if (reducedElement < 0) {
            const errorMsg = `Element: (${reducedElement}) ist kleiner als 0 => somit kann es sich nicht mehr um einen Graphen handeln.`
            throw new Error(errorMsg);
        }
        changesNumbers.push(currentNumber);
        sequence[i] = reducedElement
    }
    console.log(`nicht verwendete nummern: ${chalk.green(untouchedNumbers)}`)
    console.log(`=> folgende Elemente (${changesNumbers}) wurden um ${decreaseValue} verringert`);
    console.log(`Nicht behandelte Elemente werden nun zu der sequence hinzugefügt.`);
    console.log(`die neue sequence ist nun: (${sequence})`);

    sequence = sortSequence(sequence)
    console.log(`sequence wird Sortiert: (${sequence})`);

    return sequence
}

function colorSequence(sequence: number[]) {
    return sequence
} 

function sortSequence(sequence: number[]): number[] {
    return sequence.sort((a, b) => b - a)
}

// console.log("\n------ VERSUCH 1 ------\n");
// check([6, 6, 6, 5, 5, 2, 2, 1, 1]);
// console.log("\n------ VERSUCH 2 ------\n");
// check([11, 11, 9, 9, 7, 5, 5, 5, 5, 4, 4, 3, 3, 2, 2, 2, 2]);
// console.log("\n------ VERSUCH 3 ------\n");
const startTime = performance.now()

check([5, 5, 4, 4, 4, 4, 4, 4]);

const endTime = performance.now()

const duration = endTime - startTime;
console.log(`Call to graph sequence checker took ${Math.round((duration + Number.EPSILON) * 100) / 100} milliseconds`)
