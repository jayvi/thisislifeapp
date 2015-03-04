/**
 * Data models
 */
Apperyio.Entity = new Apperyio.EntityFactory({
    "Number": {
        "type": "number"
    },
    "Boolean": {
        "type": "boolean"
    },
    "String": {
        "type": "string"
    }
});
Apperyio.getModel = Apperyio.Entity.get.bind(Apperyio.Entity);

/**
 * Data storage
 */
Apperyio.storage = {

    "user_id": new $a.LocalStorage("user_id", "String"),

    "user_public_name": new $a.LocalStorage("user_public_name", "String"),

    "token": new $a.LocalStorage("token", "String")
};