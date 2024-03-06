# Hospital API
## Tech used: Node js, Mongoose, Express js.
## [Project Video](https://drive.google.com/file/d/1CKrDmSwdK9abABW365N46lFUysoeq-v6/view)
## Project Preview
## Routes
### /doctors/register → with username and password and confirmPassword
![Screenshot (71)](https://github.com/pratheek5299/hospital-api/assets/72083992/a1305bf2-e114-4b4b-be07-d834eb4648ed)
### /doctors/login → returns the JWT to be used
![Screenshot (72)](https://github.com/pratheek5299/hospital-api/assets/72083992/85affc51-1232-45c1-a6b6-1f217b294f23)
### /patients/register  → send jwt and the patient data
#### jwt 
![Screenshot (73)](https://github.com/pratheek5299/hospital-api/assets/72083992/0d76ee46-05d1-4df3-9657-8ea1f0920587)
#### paitent data
![Screenshot (74)](https://github.com/pratheek5299/hospital-api/assets/72083992/7ba8a48a-4383-43c0-ba26-b0a0e4b91289)
#### if the patient is already registered.
![Screenshot (75)](https://github.com/pratheek5299/hospital-api/assets/72083992/415680c0-7114-449a-8efd-80a775f82dd9)

### /patients/:id/create_report  → use the patient id and create a new report. Body contains status 
#### status: Negative
![Screenshot (76)](https://github.com/pratheek5299/hospital-api/assets/72083992/64184b19-51c7-4956-9573-7b540f66a6b9)
#### status: Positive-Admit
![Screenshot (77)](https://github.com/pratheek5299/hospital-api/assets/72083992/3a7aca67-8a48-4451-b404-2154f6c6bad7)

### /patients/:id/all_reports → List all the reports of a patient oldest to latest
![Screenshot (78)](https://github.com/pratheek5299/hospital-api/assets/72083992/37c5f3a9-af79-46f5-a460-2db9a72488cb)

### /reports/:status → List all the reports of all the patients filtered by a specific status
#### Negative status
![image](https://github.com/pratheek5299/hospital-api/assets/72083992/453541a6-ac51-4254-90fa-daaca1c1f450)
#### Positive-Admit status
![Screenshot (80)](https://github.com/pratheek5299/hospital-api/assets/72083992/32728d33-454d-4c20-bf1a-962bbc86024c)





### Start commands: 
### npm install
### nodemon index.js

# Folder structure of the project
## config
###     mongoose.js
###     passport-jwt-strategy.js
## controller
### api
####    v1
#####       patients_api.js
#####       users_api.js
## models
###     patients.js
###     reports.js
###     user.js
## routes
### api
####    v1
#####       index.js
#####       patients.js
#####       reports.js
#####       users.js
## .gitignore
## index.js
## package-lock.json
## package.json
## README.md
