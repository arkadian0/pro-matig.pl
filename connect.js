var sql = require("mssql");

var dbConfig = {
	server:"DESKTOP-1330MRU\ADRIANSQL",
	database:"DESKTOP-1330MRU\ADRIANSQL",
	user:"sa",
	password:"plemionaxd1",
	port:1433
	
};

function getEmp()
{
	document.write("SIEMAx");
	var conn = new sql.Connection(dbConfig);
	var req = new sql.Request(conn);
	conn.connect(function(err){
		document.write("BLAD");
	if(err)
		{

return;
	}
	req.query("SELECT * FROM Adrian" ,function(err,recordset )
	{
		if(err)
		{
			document.write("BLAD");
		}else{
			
			document.write("SIEMA");
		}
		conn.close();
	});
	
		
	});
}
