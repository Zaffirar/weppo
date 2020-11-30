console.log("Jak się nazywasz?");
process.stdin.once('data', (s) => {
    let imie = s.toString().trim();
    console.log("Witaj, " + imie + "!");
    process.exit();
});