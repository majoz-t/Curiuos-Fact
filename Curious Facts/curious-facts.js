async function curiousfact() {
    let response= await fetch ("https://uselessfacts.jsph.pl/ ");
    let fact= await response.json()

    console.log(fact)
}   