# **file-server**
This is my file-server stretch project. The goals of this project are:

Creating client/server interface for file transfers from the host to client. This server should support multiple client connections and store transferred files in the appropriate directory on the client side. This will be done locally on my own machine, so each client directory will be generated with the client's unique UserID.

---
## Client Side To-Do
- [x]Create client interface
- [x] Implement readline
- [] Implement fs(filesystem) control functions
- [] Generate new clientdir with userID on initial connection
- [] Allow client to login with userID
## Server Side To-Do
- [x]Create server interface
- [x]Create server dir
- []Implement fs(filesystem) control functions
- []Assign UserID on initial connection
- []Remember UserID for subsequent connections
- []Implement interactive UI for navigating filedirectories