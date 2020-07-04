INSTRUCCIONES:
1) Se descarga el proyecto, se borra carpeta node modules si existe
2) En terminal: npm install
3) En terminal: npm i sequelize sequelize-cli sqlite3
4) (PARA LISTAR TODO) En terminal: node . --read:Contact
5) (PARA CREAR) En terminal: node . --create:Contact --firstname=Marcela --lastname=Malaver --phone=3000000000 --email=marcela@mail.com
6) (PARA ACTUALIZAR CONTACTO CON ID=1) En terminal: node . --update:Contact --firstname=Marcela --lastname=Malaver --phone=3000000001 --id_1

7) (PARA ELIMINAR CONTACTO CON ID=2) node . --delete:Contact --id_2

8) (PARA BUSCAR CONTACTO CON ID=1) node . --search:Contact --id_1