let i = 1;
while (i <= 20) {
    if (i === 17) {
        break;
    }
    else if (i === 13 || i == 7) {
        i+=2;
        continue;
    }
    console.log(i);
    i++
}
