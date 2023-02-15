const getClients = 'SELECT * FROM clients';
const getClientById = 'SELECT * FROM clients WHERE id = $1';
const checkEmailExists = 'SELECT c From clients c WHERE c.email = $1';
const addClient = `INSERT INTO clients 
   (
      age, dob, email, first_name, last_name, role
   ) 
   VALUES 
   (
      $1, $2, $3, $4, $5, $6
   )`;
const removeClient = 'DELETE FROM clients WHERE id = $1';
const updateClient = `UPDATE clients SET
		age = $1, 
		dob = $2, 
		email = $3, 
		first_name = $4, 
		last_name = $5, 
		role = $6
	WHERE id = $7
`;

module.exports = {
	getClients,
	getClientById,
	checkEmailExists,
	addClient,
	removeClient,
	updateClient,
};
