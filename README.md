# Bingebox
## Springboot Microservices
### Overview
A Prototype for Movie and TV Show Application: Developed a microservices-based application using Spring Boot, MongoDB, and RabbitMQ. Implemented service discovery with Eureka, along with an API Gateway for routing. Utilised RabbitMQ for messaging between services and fetched dynamic content from the themoviedb.org API.

### Architecture Overview:



### Demo
1. Login
![image](https://github.com/user-attachments/assets/7bbe2e23-b3f4-4eec-ac57-5520d8591b92)

2. see Favorite movies
![image](https://github.com/user-attachments/assets/064ab72c-a228-4df6-b230-f4331489f99e)

3. Search Favorite movies
![image](https://github.com/user-attachments/assets/f57aac41-c504-4b93-9f68-4994c47fa620)

### Technology Stack
1. Springboot
2. Spring Cloud Gateway
3. Eureka Server
4. Rest API
5. Mysql
6. MongoDB
7. RabbitMQ
8. Docker

#### Running Frontend Client
6. cd into Bingebox frontend folder
   ```
   cd frontend
   ```
7. run npm install in cmd
   ```
   npm install
   ```
8. run npm start 
   ```
   npm start
   ```
9. open http://localhost:4200 in any browser. If the movies don't load check the API response in the network.
10. If Movies don't load, update the ApiKey
11. If still it fails try using VPN. (API doesn't work properly in some countries)

#### Running Backend
12. Steps for Docker to be updated soon. Fixing issue in Docker-compose and Dockerfiles


#### To Do:
13. Recommendation system and trend analysis using ML.
14. Notification System.
   
