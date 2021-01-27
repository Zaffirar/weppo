//using database from zadanie_5.sql
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
        console.log('');
        result = await request.query('SELECT * FROM OSOBA');
        result.recordset.forEach(r => {
            console.log(`${r.ID} ${r.FirstName} ${r.LastName}`);
        })
        
        result = await request.query('SELECT OSOBA.FirstName, OSOBA.LastName, MIEJSCE_PRACY.WorkspaceName\
        FROM MANY_TO_MANY \
        JOIN MIEJSCE_PRACY \
        ON MIEJSCE_PRACY.ID = MANY_TO_MANY.ID_praca \
        JOIN OSOBA \
        ON OSOBA.ID = MANY_TO_MANY.ID_osoba')
        console.log('');
        result.recordset.forEach(r => {
            console.log(`${r.FirstName} ${r.LastName} ${r.WorkspaceName}`);
         });

        var newWorkId = await request.query('INSERT INTO MIEJSCE_PRACY VALUES(\'TYY\'); SELECT SCOPE_IDENTITY() FROM MIEJSCE_PRACY;');
        newWorkId = newWorkId.recordset[0][''];
         
        var newEmployeeId = await request.query(`INSERT INTO OSOBA VALUES(\'Zenek\', \'Marcinkiewicz\'); SELECT SCOPE_IDENTITY() FROM MIEJSCE_PRACY;`);
        newEmployeeId = newEmployeeId.recordset[0][''];

        await request.query(`INSERT INTO MANY_TO_MANY VALUES(0, ${newWorkId}), (${newEmployeeId}, 1), (${newEmployeeId}, ${newWorkId})`);

        var result = await request.query('SELECT * FROM MIEJSCE_PRACY');
        console.log('');
        result.recordset.forEach(r => {
            console.log(`${r.ID} ${r.WorkspaceName}`);
        })

        result = await request.query('SELECT * FROM OSOBA');
        console.log('');
        result.recordset.forEach(r => {
            console.log(`${r.ID} ${r.FirstName} ${r.LastName}`);
        })
        
        result = await request.query('SELECT OSOBA.FirstName, OSOBA.LastName, MIEJSCE_PRACY.WorkspaceName\
        FROM MANY_TO_MANY \
        JOIN MIEJSCE_PRACY \
        ON MIEJSCE_PRACY.ID = MANY_TO_MANY.ID_praca \
        JOIN OSOBA \
        ON OSOBA.ID = MANY_TO_MANY.ID_osoba')
        console.log('');
        result.recordset.forEach(r => {
           console.log(`${r.FirstName} ${r.LastName} ${r.WorkspaceName}`);
        });
        await conn.close();
    }
    catch (err) {
        if (conn.connected)
            conn.close();
        console.log(err);
    }
}
main();