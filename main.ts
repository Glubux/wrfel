let random = 0
input.onGesture(Gesture.Shake, function () {
    random = randint(1, 6)
    basic.showString("" + (random))
})
