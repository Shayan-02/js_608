let fisaghoores = (a, b, c) => {
    if (a > 0 && b > 0 && c > 0) {
        let a2 = a * a
        let b2 = b * b
        let c2 = c * c
        if (a2 + b2 == c2 || a2 + c2 == b2 || b2 + c2 == a2) return a;
        else return 0;
    }
}


alert(fisaghoores(3, 4, 5)*2)
