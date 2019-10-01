let friend = ['Emily', 'Luke', 'Audrey', 'Julian', 'Oliver'];

for (let i = 0; i < friend.length; i++) {
    for (let j = 99; j > 0; j--) {
        if (j > 2)
            console.log(+ j + ' lines of code in the file, ' + j + ' lines of code; ' + friend + ' strikes one out, clears it all out, ' + (j--) + ' lines of code in the file.');
    }}