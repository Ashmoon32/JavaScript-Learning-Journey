function doSlowThing(callback) {
    setTimeout( () => {
        const result = "done✅";
        callback(result);
    }, 1000);
}

doSlowThing( res => (console.log("Callback received:" , res)) )