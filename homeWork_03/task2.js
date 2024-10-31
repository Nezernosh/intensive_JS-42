function logger() {
    console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };

// Способ 1: bind
const boundLogger = logger.bind(obj);
boundLogger();

// Способ 2: call
logger.call(obj);

// Способ 3: apply
logger.apply(obj);
