function pacman_links () {
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
function pacman_rechts () {
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
function gefressen2 () {
    for (let index = 0; index < 4; index++) {
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
    music.playMelody("G B A G C5 B A B ", 274)
}
