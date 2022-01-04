function StartPeriod() {
    console.log('class started');

    //raise event when bell rings
    setTimeout(() => {
        emitter.emit('bellring', 'second period ended');
    }, 2000)
}

