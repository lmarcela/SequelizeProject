const { CRUD } = require("./helpers");
const db = require("./models");

const params = process.argv;

if (params.length <= 2) {
  process.exit(0);
}

const args = params.slice(2);

const command = args[0].split(":")[0].substring(2);
const entity = args[0].split(":")[1];
const idBuscado = args[args.length - 1].split("_")[1];

switch (command) {
  case CRUD.CREATE:
    const data = {};
    args.slice(1).map((arg) => {
      const tmp = arg.split("=");
      data[tmp[0].substring(2)] = tmp[1];
    });

    db[entity]
      .create(data)
      .then(() => console.log("Contact created!"))
      .catch(console.log);

    break;

  case CRUD.READ:
    db[entity].findAll().then(console.log).catch(console.log);
    break;

  case CRUD.UPDATE:
    db[entity]
      .findByPk(idBuscado)
      .then((res) => {
        if (res != null) {
          const data1 = {};
          args.slice(1).map((arg) => {
            const tmp = arg.split("=");
            data1[tmp[0].substring(2)] = tmp[1];
          });

          db[entity]
            .update(data1, { where: { id: idBuscado } })
            .then(() => {
              console.log("Contact updated!");
            })
            .catch(console.log);
        } else {
          console.log("Not found!");
        }
      })
      .catch(console.log);

    break;

    
  case CRUD.DELETE:
    db[entity]
      .findByPk(idBuscado)
      .then((res) => {
        if (res != null) {
          db[entity]
            .destroy({ where: { id: idBuscado } })
            .then(() => {
              console.log("Contact deleted!");
            })
            .catch(console.log);
        } else {
          console.log("Not found!");
        }
      })
      .catch(console.log);

    break;

  
    case CRUD.SEARCH:
      db[entity]
        .findByPk(idBuscado)
        .then((res) => {
          if (res != null) {
            console.log(res)
          } else {
            console.log("Not found!");
          }
        })
        .catch(console.log);
  
      break;
  
  default:
    console.log("Operation not found!" + command);
}

// --create:Contact --firstname=Marluan
