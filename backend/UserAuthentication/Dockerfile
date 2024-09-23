# Stage 1: Build the JAR using Maven
FROM maven:3.8.6-openjdk-17 AS build
WORKDIR /usr/src/app

# Copy pom.xml and download dependencies
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy the rest of the source code
COPY . .

# Build the application
RUN mvn clean package -DskipTests

# Stage 2: Use OpenJDK to run the JAR
FROM openjdk:17-jre-slim
WORKDIR /usr/lib

# Copy the JAR from the Maven build stage
COPY --from=build /usr/src/app/target/UserAuthentication-0.0.1-SNAPSHOT.jar /usr/lib/UserAuthentication-0.0.1-SNAPSHOT.jar

# Run the application
ENTRYPOINT ["java", "-jar", "UserAuthentication-0.0.1-SNAPSHOT.jar"]
