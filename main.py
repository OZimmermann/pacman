def pacman_links():
    basic.pause(100)
    while not (input.button_is_pressed(Button.A)) and not (input.button_is_pressed(Button.B)):
        if not (input.button_is_pressed(Button.A)) and not (input.button_is_pressed(Button.B)):
            basic.show_leds("""
                # . # # .
                . # . # #
                . . # # #
                . # # # #
                # . # # .
                """)
        basic.pause(100)
        if not (input.button_is_pressed(Button.A)) and not (input.button_is_pressed(Button.B)):
            basic.show_leds("""
                . . # # .
                # # . # #
                # # # # #
                # # # # #
                . . # # .
                """)
        basic.pause(100)
def pacman_rechts():
    basic.pause(100)
    while not (input.button_is_pressed(Button.A)) and not (input.button_is_pressed(Button.B)):
        if not (input.button_is_pressed(Button.A)) and not (input.button_is_pressed(Button.B)):
            basic.show_leds("""
                . # # . #
                # # . # .
                # # # . .
                # # # # .
                . # # . #
                """)
        basic.pause(100)
        if not (input.button_is_pressed(Button.A)) and not (input.button_is_pressed(Button.B)):
            basic.show_leds("""
                . # # . .
                # # . # #
                # # # # #
                # # # # #
                . # # . .
                """)
        basic.pause(100)
def gefressen(num: number):
    for i in range(num):
        basic.show_icon(IconNames.HEART)
        basic.pause(100)
        basic.show_icon(IconNames.SMALL_HEART)
        basic.pause(100)
while True:
    while not (input.button_is_pressed(Button.AB)):
        if input.button_is_pressed(Button.A):
            pacman_links()
        if input.button_is_pressed(Button.B):
            pacman_rechts()
    gefressen(4)
    music.play_melody("G B A G C5 B A B ", 274)
