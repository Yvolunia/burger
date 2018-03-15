require('dotenv').config();

module.exports = {
	mysql: {
		user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        host: process.env.MYSQL_HOST,
        database: process.evn.MYSQL_DATABASE
	}
};