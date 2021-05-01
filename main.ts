function pacman_links () {
    basic.pause(100)
    while (!(input.buttonIsPressed(Button.A)) && !(input.buttonIsPressed(Button.B))) {
        basic.showLeds(`
            # . # # .
            . # . # #
            . . # # #
            . # # # #
            # . # # .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . # # .
            # # . # #
            # # # # #
            # # # # #
            . . # # .
            `)
        basic.pause(100)
    }
}
function pacman_rechts () {
    basic.pause(100)
    while (!(input.buttonIsPressed(Button.A)) && !(input.buttonIsPressed(Button.B))) {
        basic.showLeds(`
            . # # . #
            # # . # .
            # # # . .
            # # # # .
            . # # . #
            `)
        basic.pause(100)
        basic.showLeds(`
            . # # . .
            # # . # #
            # # # # #
            # # # # #
            . # # . .
            `)
        basic.pause(100)
    }
}
function gefressen (num: number) {
    for (let Index = 0; Index <= num; Index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(100)
    }
}
while (true) {
    while (!(input.buttonIsPressed(Button.AB))) {
        if (input.buttonIsPressed(Button.A)) {
            pacman_links()
        }
        if (input.buttonIsPressed(Button.B)) {
            pacman_rechts()
        }
    }
    gefressen(4)
    music.playMelody("G B A G C5 B A B ", 274)
}
