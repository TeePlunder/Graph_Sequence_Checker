import chalk from "chalk";

function check(sequenz: number[]) {
    console.log(chalk.blue('Hello world!'));
    let sortedSequenz = sortSequenz(sequenz)
    const originalArray = sortedSequenz.slice()

    let iterationCounter = 1;
    try {
        while (!sortedSequenz.every((element) => element === 0)) {
            console.log("------");
            console.log(`Iteration: ${iterationCounter}`);
            console.log(`Sequenz: (${sortedSequenz})`);

            const firstElement = sortedSequenz.shift();
            if (!firstElement) {
                break;
            }
            console.log(`erstes Element ist (${firstElement}) also wird es aus der Sequenz entfernt`)
            sortedSequenz = decreaseSequenz(sortedSequenz, firstElement)
            iterationCounter++
        }
        console.log(`\nBei der Graphfolge: (${originalArray}) handelt es sich um einen Graphen`);
    } catch (error) {
        console.error(error);
    }
}

function decreaseSequenz(sequenz: number[], count: number): number[] {
    if (sequenz.length < count) {
        throw new Error("zu wenige Elemente in der Sequenz");
    }
    const decreaseValue = 1;
    const originalSequenz = sequenz.slice()
    console.log("\n-- Verringerung wird gestartet --");

    console.log(`Squenz vor der Verringerung: (${originalSequenz})`);
    console.log(`es sollen die ersten ${count} Elemente um ${decreaseValue} verringert werden.`);

    let changesNumbers: number[] = []
    for (let i = 0; i < count; i++) {
        const currentNumber = sequenz[i];
        const reducedElement = currentNumber - decreaseValue
        if (reducedElement < 0) {
            const errorMsg = `Element: (${reducedElement}) ist kleiner als 0 => somit kann es sich nicht mehr um einen Graphen handeln.`
            throw new Error(errorMsg);
        }
        changesNumbers.push(currentNumber);
        sequenz[i] = reducedElement
    }
    console.log(`=> folgende Elemente (${changesNumbers}) wurden um ${decreaseValue} verringert`);
    console.log(`Nicht behandelte Elemente werden nun zu der Sequenz hinzugefügt.`);
    console.log(`die neue Sequenz ist nun: (${sequenz})`);

    sequenz = sortSequenz(sequenz)
    console.log(`Sequenz wird Sortiert: (${sequenz})`);

    return sequenz
}

function sortSequenz(sequenz: number[]): number[] {
    return sequenz.sort((a, b) => b - a)
}

// console.log("\n------ VERSUCH 1 ------\n");
// check([6, 6, 6, 5, 5, 2, 2, 1, 1]);
// console.log("\n------ VERSUCH 2 ------\n");
// check([11, 11, 9, 9, 7, 5, 5, 5, 5, 4, 4, 3, 3, 2, 2, 2, 2]);
console.log("\n------ VERSUCH 3 ------\n");
check([5, 5, 4, 4, 4, 4, 4, 4]);
