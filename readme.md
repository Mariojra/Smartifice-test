## System design

### Backend
For the backend i'd build a RestApi with Node and using essentially express and what it is necessary for the DB connection, always having in mind the good structure of the project (views, modules, routes, etc.).

### Frontend
I'd use Angular, because is a framework that allows you to have an organize and easy to escale app, making really easy to make your web application asyncronous and a spa.
If the app would have a mobile version I would use Ionic Framework.

### Authorization Protocol
For the authentication I would use JWT, it allows to make a security session and destroy it if anything have changed in the header key, nowdays is a really used authentication protocol.

### Database
I think a good choice would be a SQL DB, maybe is because I'm more used to them but they have a lot features that would help the app to improve, like data analyzing tools from SQL Server. SQLs have things like logs and procedures that help on having a good control on your information and what happens to it.

### Perfomance recommendations
Some recommendations would be:
- Having a good development environment.
Manage good Standards of development and testing the app before it goes to production. The use of tags is very important too.

- Good security protocols.
As long as the app is getting more customers it would be more important to keep the security on their information or transactions they do in the app and having logs of what is happening with this information.

- Consider clouding services.
When your application is growing you would need more infrastructure to manage the requests to your servers, It means that you need more servers, make more network and security configuration; but if you use a cloud host service it makes this process easier and the app could handle the constant growth.

### How this solution’d like on the cloud?
As i said in the last point, having the app at the cloud can be something good to the app and a good choice would be AWS. It gives you a lot of features and configuration for both the database and for the app itself, including testing your app online and other good stuffs.