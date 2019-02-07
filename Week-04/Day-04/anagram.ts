function anagram(string1: string, string2: string): boolean {

    return string1.split('').sort().join('') === string2.split('').sort().join('');
}


export {anagram};

console.log(anagram('words', 'sword'));