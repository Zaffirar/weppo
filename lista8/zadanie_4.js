//using database form zadanie_4.sql
var mssql = require('mssql');
async function main() {
    var conn = new mssql.ConnectionPool(
        'server=localhost,1433;database=Weppo_lista8;user id=foo;password=foo');
    try {
        await conn.connect();
        var request = new mssql.Request(conn);
        var result = await request.query('SELECT * FROM MIEJSCE_PRACY');
        result.recordset.forEach(r => {
            console.log(`${r.ID} ${r.WorkspaceName}`);
        })

        result = await request.query('SELECT OSOBA.ID, FirstName, LastName, MIEJSCE_PRACY.WorkspaceName \
        FROM OSOBA JOIN MIEJSCE_PRACY \
        ON OSOBA.MiejscePracyID = MIEJSCE_PRACY.ID');
        result.recordset.forEach(r => {
            console.log(`${r.ID} ${r.FirstName} ${r.LastName} ${r.WorkspaceName}`);
        })
        
        var IDToReturn = await request.query('INSERT INTO MIEJSCE_PRACY VALUES(\'TYY\'); SELECT SCOPE_IDENTITY() FROM MIEJSCE_PRACY');
        IDToReturn = IDToReturn.recordset[0][''];
         
        await request.query(`INSERT INTO OSOBA VALUES(\'Zenek\', \'Marcinkiewicz\', \'${IDToReturn}\')`);
        
        result = await request.query('SELECT * FROM MIEJSCE_PRACY');
        result.recordset.forEach(r => {
            console.log(`${r.ID} ${r.WorkspaceName}`);
        })

        result = await request.query('SELECT OSOBA.ID, FirstName, LastName, MIEJSCE_PRACY.WorkspaceName \
        FROM OSOBA JOIN MIEJSCE_PRACY \
        ON OSOBA.MiejscePracyID = MIEJSCE_PRACY.ID');
        result.recordset.forEach(r => {
            console.log(`${r.ID} ${r.FirstName} ${r.LastName} ${r.WorkspaceName}`);
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