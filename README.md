# StudentManager
1. Download the code as zip, extract the files. 

2. Open the StudentManagerAPI.sln in Visual Studio.

3. Create a new database in your localhost in Microsoft SQL Server Management Studio. 

4. Change the connection string in the appsettings.json to the proper database you created.
	For example: "DefaultConnection": "server=localhost;database=test;trusted_connection=true;TrustServerCertificate=true"

5. In the package manager console, type in "dotnet tool install --global dotnet-ef" to install entity framework.

6. Then in the package manager console, type in "dotnet ef migrations add test" to migrate the table and procedures into the database.

7. Then in package manager console type in "dotnet ef database update" to update the database.

8. Lastly, run the API.

After these steps are taken, go to the website at https://student-manager-fe7af.web.app/ and try it out! Email me with any questions, comments, or concerns.
