var mssql = require('mssql');
async function insert_sekwencja() {
    var conn = new mssql.ConnectionPool(
        'server=localhost,1433;database=Weppo_lista8;user id=foo;password=foo');
    try {
        await conn.connect();
        var request = new mssql.Request(conn);

        var result = await request.query('SELECT * FROM OSOBA');
        result.recordset.forEach(r => {
            console.log(`${r.ID} ${r.FirstName} ${r.LastName}`);
        })

        await request.query('INSERT INTO OSOBA(ID, FirstName, LastName) VALUES(NEXT VALUE FOR SEKWENCJA, \'Michał\', \'Wiśniewski\');');
        var IDToReturn = await request.query('SELECT current_value FROM sys.sequences WHERE name = \'SEKWENCJA\';');
        console.log(IDToReturn.recordset[0]);

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

async function insert_autogen() {
    var conn = new mssql.ConnectionPool(
        'server=localhost,1433;database=Weppo_lista8;user id=foo;password=foo');
    try {
        await conn.connect();
        var request = new mssql.Request(conn);

        var result = await request.query('SELECT * FROM OSOBA');
        result.recordset.forEach(r => {
            console.log(`${r.ID} ${r.FirstName} ${r.LastName}`);
        })

        var IDToReturn = await request.query('INSERT INTO OSOBA(FirstName, LastName) VALUES(\'Michał\', \'Wiśniewski\'); SELECT SCOPE_IDENTITY() FROM OSOBA');
        console.log(IDToReturn.recordset[0]);

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
insert_sekwencja(); //using first database from zadanie_1.sql
//insert_autogen(); //using second database from zadanie_1.sql