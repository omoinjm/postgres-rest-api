const pool = require("../../db");
const queries = require("./queries");

const getClients = (req, res) => {
  pool.query(queries.getClients, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getClientById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getClientById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addClient = (req, res) => {
  const { age, dob, email, first_name, last_name, role } = req.body;

  // check if email exists
  pool.query(queries.checkEmailExists, [email], (error, results) => {
    if (results.rows.length) {
      res.send("Email already exists!");
    }

    // add client to db
    pool.query(
      queries.addClient,
      [age, dob, email, first_name, last_name, role],
      (error, results) => {
        if (error) throw error;
        res.status(201).send("Student created successfully!");
      }
    );
  });
};

const removeClient = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getClientById, [id], (error, results) => {
    if (!results.rows.length) {
      res.send("Client does not exist in the database!");
    }

    pool.query(queries.removeClient, [id], (error, results) => {
      if (error) throw error;
      res.status(200).send("Student removed successfully!");
    });
  });
};

const updateClient = (req, res) => {
  const id = parseInt(req.params.id);
  const { age, dob, email, first_name, last_name, role } = req.body;

  pool.query(queries.getClientById, [id], (error, results) => {
    if (!results.rows.length) {
      res.send("Client does not exist in the database!");
    }

    pool.query(
      queries.updateClient,
      [age, dob, email, first_name, last_name, role, id],
      (error, results) => {
        if (error) throw error;
        res.status(200).send("Client updated successfully!");
      }
    );
  });
};

module.exports = {
  getClients,
  getClientById,
  addClient,
  removeClient,
  updateClient,
};
