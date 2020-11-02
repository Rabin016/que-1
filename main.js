function customPrint(n, message) {
    (function iter() {
        if (n > 0) {
            console.log(message);
            n--;
            iter();
        }
    })();
}

customPrint(5, "Hello, World!");
