export default function createKeyBoardListener(document) {

    const observers = [];

    function subscribe(observerFunction) {
        observers.push(observerFunction);
    }

    function notifyAll(command) {
        for (let observerFunction of observers) {
            observerFunction(command);
        }
    }

    document.addEventListener('keydown', handleKeyDown);
    function handleKeyDown(event) {
        const keyPressed = event.key;
        const command = {
            playerId: 'player1',
            keyPressed
        }

        notifyAll(command);
    }

    return {
        subscribe
    }
}