radio.onReceivedNumber(function (receivedNumber) {
    asteroid = game.createSprite(receivedNumber, 0)
})
input.onButtonPressed(Button.A, function () {
    astronave_2.change(LedSpriteProperty.X, -1)
    radio.sendString("an2L")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "anL") {
        astronave.change(LedSpriteProperty.X, -1)
    }
    if (receivedString == "anR") {
        astronave.change(LedSpriteProperty.X, 1)
    }
    if (receivedString == "moveAsteroid") {
        asteroid.change(LedSpriteProperty.Y, 1)
    }
})
input.onButtonPressed(Button.B, function () {
    astronave_2.change(LedSpriteProperty.X, 1)
    radio.sendString("an2R")
})
let asteroid: game.LedSprite = null
let astronave_2: game.LedSprite = null
let astronave: game.LedSprite = null
radio.setGroup(69)
astronave = game.createSprite(2, 4)
astronave_2 = game.createSprite(2, 3)
asteroid = game.createSprite(2, 0)
asteroid.delete()
basic.forever(function () {
    if (asteroid.isTouching(astronave)) {
        game.addScore(-1)
    }
    if (asteroid.isTouching(astronave_2)) {
        game.addScore(-1)
    }
    if (asteroid.get(LedSpriteProperty.Y) >= 4) {
        asteroid.delete()
    }
})
