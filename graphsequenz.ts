import chalk from "chalk";

function check(sequence: number[]) {
    let sortedSequence = sortSequence(sequence)
    const originalArray = [...sortedSequence]

    let iterationCounter = 1;
    try {
        while (!sortedSequence.every((element) => element === 0)) {
            console.log("------");
            console.log(`${chalk.bgBlue( ` Iteration: ${iterationCounter} `)}`);
            console.log(`Sort sequence: (${sortedSequence})`);

            const firstElement = sortedSequence.shift();
            if (!firstElement) {
                break;
            }
            console.log(`First element will be removed from sequence: (${chalk.underline.red(firstElement)},${sortedSequence})`)
            sortedSequence = decreaseSequence(sortedSequence, firstElement)
            iterationCounter++
        }
        console.log(chalk.green(`\nYES! :D\nThe graph sequence (${originalArray}) is a graph!`));
    } catch (error) {
        console.error(error);
    }
}

function decreaseSequence(sequence: number[], count: number): number[] {
    if (sequence.length < count) {
        throw new Error(`${count} elements cannot be reduced from a sequence with ${sequence.length} elements. There are too few elements in the sequence.`);
    }
    const decreaseValue = 1;
    const originalSequence = [...sequence]

    console.log(`Sequence before decreasing: (${originalSequence})`);

    let changesNumbers: number[] = []
    let untouchedNumbers: number[] = originalSequence.slice(count,originalSequence.length)
    for (let i = 0; i < count; i++) {
        const currentNumber = sequence[i];
        const reducedElement = currentNumber - decreaseValue
        if (reducedElement < 0) {
            const errorMsg = `Number: (${reducedElement}) is smaller as 0 => therefore it can no longer be a graph.`
            throw new Error(errorMsg);
        }
        changesNumbers.push(currentNumber);
        sequence[i] = reducedElement
    }
    console.log(`${chalk.underline.red("Numbers")} will be decreased by ${chalk.red(decreaseValue)}.\n${chalk.green("Numbers")} will not be changed.
    => (${chalk.underline.red(changesNumbers)},${chalk.green(untouchedNumbers)})`);

    console.log(chalk.bgGray("Start decreasing"));
    console.log(`Add untouched ${chalk.green("numbers")} at the and of sequence`);
    console.log(`The new sequence is: (${sequence})`);

    sequence = sortSequence(sequence)
    console.log(`Sort sequence => (${sequence})`);

    return sequence
}

function sortSequence(sequence: number[]): number[] {
    return sequence.sort((a, b) => b - a)
}

const startTime = performance.now()

check([1,4,3,2,4,5,1,2,2,2,3,3,2]);

const endTime = performance.now()

const duration = endTime - startTime;
console.log(chalk.gray(`\nCall to graph sequence checker took ${Math.round((duration + Number.EPSILON) * 100) / 100} milliseconds`))
