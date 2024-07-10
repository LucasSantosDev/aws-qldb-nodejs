const qldb = require("amazon-qldb-driver-nodejs");

// creating a connection with a ledger
const qldbDriver = new qldb.QldbDriver("ledgerExample", undefined);

// removing item
const deleteItem = async function () {
  await qldbDriver.executeLambda(async (txn) => {
    await txn.execute(
      "DELETE FROM exampleTable WHERE FirstName = ?",
      "Lucas 0.9813905700931809"
    );
  });
};

// update item
const updateItem = async function () {
  await qldbDriver.executeLambda(async (txn) => {
    await txn.execute(
      "UPDATE exampleTable SET FirstName = ? WHERE FirstName = ?",
      "Lucas atualizado",
      "Lucas 0.9813905700931809"
    );
  });
};

// list items
const listItems = async function () {
  return qldbDriver.executeLambda(async (txn) =>
    (await txn.execute("SELECT * FROM exampleTable")).getResultList()
  );
};

// getting a history of modifications of specific item
const getDocumentHistory = async function (firstName) {
  const history = await qldbDriver.executeLambda(async (txn) =>
    (
      await txn.execute(
        "SELECT metadata.id FROM history(exampleTable) WHERE data.FirstName = ?",
        firstName
      )
    ).getResultList()
  );

  if (history.length > 0 && history[0]?.id) {
    return qldbDriver.executeLambda(async (txn) =>
      (
        await txn.execute(
          "SELECT * FROM history(exampleTable) WHERE metadata.id = ?",
          history[0].id
        )
      ).getResultList()
    );
  }

  return [];
};

// inserting item
const insertItem = async function () {
  await qldbDriver.executeLambda(async (txn) => {
    const doc = { FirstName: "Lucas " + Math.random(), LastName: "Santos" };

    await txn.execute("INSERT INTO exampleTable ?", doc);
  });
};

exports.handler = async () => {
  try {
    await insertItem();
    await updateItem();

    const items = await listItems();
    const documentHistory = await getDocumentHistory("Lucas atualizado");
    // await deleteItem();

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "QLDB operations completed successfully!",
        data: items,
        history: documentHistory,
      }),
    };
  } catch (error) {
    console.error("Error handling QLDB operations:", error);

    return {
      statusCode: 500,
      body: JSON.stringify("Error handling QLDB operations."),
    };
  }
};
