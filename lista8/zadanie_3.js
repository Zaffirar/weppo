var mssql = require('mssql');
async function main() {
    var conn = new mssql.ConnectionPool(
        'server=localhost,1433;database=Weppo_lista8;user id=foo;password=foo');
    try {
        await conn.connect();
        var request = new mssql.Request(conn);
        var result = await request.query('SELECT * FROM OSOBA');
        result.recordset.forEach(r => {
            console.log(`${r.ID} ${r.FirstName} ${r.LastName}`);
        })
        await request.query('UPDATE OSOBA SET FirstName = \'Marcin\' WHERE LastName = \'Kowalski\';');
        await request.query('DELETE FROM OSOBA WHERE LastName = \'Malinowski\';');
        result = await request.query('SELECT * FROM OSOBA');
        result.recordset.forEach(r => {
            console.log(`${r.ID} ${r.FirstName} ${r.LastName}`);
        })
        await conn.close();
    }
    catch (err) {
        if (conn.connected)
            conn.close();
        console.log(err);
    }
}
main();