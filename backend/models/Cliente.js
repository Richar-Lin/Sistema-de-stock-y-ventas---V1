import  Sequelize  from "sequelize";
import db from "../config/db.js";

export const Cliente = db.define('clientes', {
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefono: {
        type: Sequelize.STRING,
        allowNull: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    direccion: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
    estado: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
})